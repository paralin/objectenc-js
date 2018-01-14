import { objectenc, aes } from './pb'
import { IEncryptionImpl } from './impl'
import { ResourceResolverFunc } from './resource'
import { IKeySaltMultihash, IKeyResource } from './resource-key'
import { crypto } from './crypto'

import * as multihashing from 'multihashing'
import toBuffer from 'typedarray-to-buffer'

// aesIvLen is the length of the AES IV in bytes
const aesIvLen = 16

// keyHashSaltLen is the length of the key hash salt in bytes
const keyHashSaltLen = 32

// newAESKeySize builds a AES key size from a key length in bytes.
export function newAESKeySize(keyLen: number): aes.KeySize {
  switch (keyLen) {
    case 16:
      return aes.KeySize.KeySize_AES128
    case 24:
      return aes.KeySize.KeySize_AES192
    case 32:
      return aes.KeySize.KeySize_AES192
    default:
      throw new Error(`invalid aes key length: ${keyLen}`)
  }
}

// validateAESMetadata checks AES metadata.
export function validateAESMetadata(meta: aes.AESMetadata): Error | null {
  if (!(meta.keySize in aes.KeySize)) {
    return new Error(`key size unknown: ${meta.keySize}`)
  }

  try {
    multihashing.decode(meta.keyHash)
  } catch (e) {
    return e
  }

  if (meta.iv.length !== aesIvLen) {
    return new Error(`expected iv length ${aesIvLen} != actual ${meta.iv.length}`)
  }

  if (meta.keyHashSalt.length !== keyHashSaltLen) {
    return new Error(
      `expected key hash salt length ${keyHashSaltLen} != actual ${meta.keyHashSalt.length}`
    )
  }

  return null
}

// AES implements the AES encryption algorithms.
export class AES implements IEncryptionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  public getEncryptionType(): objectenc.EncryptionType {
    return objectenc.EncryptionType.EncryptionType_AES
  }

  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  public validateMetadata(metadata: Uint8Array): Error | null {
    try {
      let aesMetadata = aes.AESMetadata.decode(metadata)
      return validateAESMetadata(aesMetadata)
    } catch (e) {
      return e
    }
  }

  // DecryptBlob decrypts an encryptedblob.
  public async decryptBlob(
    resolver: ResourceResolverFunc | null,
    blob: objectenc.EncryptedBlob
  ): Promise<Uint8Array> {
    let aesMetadata = aes.AESMetadata.decode(blob.encMetadata)
    let keyResource = await this.resolveKey(resolver, blob, aesMetadata.iv, null, aesMetadata)
    if (!keyResource.keyData) {
      throw new Error('key resource did not return a decryption key')
    }

    // let aesCtr = new aesjs.ModeOfOperation.ctr(keyResource.keyData)
    let decryptedBytes = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: aesMetadata.iv },
      keyResource.keyData,
      blob.encData
    )
    return new Uint8Array(decryptedBytes)
  }

  // EncryptBlob encrypts a blob.
  public async encryptBlob(
    resolver: ResourceResolverFunc,
    data: Uint8Array
  ): Promise<objectenc.EncryptedBlob> {
    let iv = <Uint8Array>crypto.getRandomValues(new Uint8Array(aesIvLen))
    let meta = new aes.AESMetadata({ iv })
    let blob = new objectenc.EncryptedBlob({
      encType: objectenc.EncryptionType.EncryptionType_AES
    })

    let keyResource = await this.resolveKey(resolver, blob, iv, data, meta)
    if (!keyResource.keyData) {
      throw new Error('key resource did not return an encryption key')
    }

    // build key metadata
    let keyRaw = new Uint8Array(await crypto.subtle.exportKey('raw', keyResource.keyData))
    meta.keySize = newAESKeySize(keyRaw.length)
    meta.keyHashSalt = <Uint8Array>crypto.getRandomValues(new Uint8Array(keyHashSaltLen))
    let hashedKeyData = new Uint8Array(keyRaw.length + keyHashSaltLen)
    hashedKeyData.set(meta.keyHashSalt, 0)
    hashedKeyData.set(keyRaw, keyHashSaltLen)
    meta.keyHash = multihashing.digest(toBuffer(hashedKeyData), 'sha1')
    blob.encMetadata = aes.AESMetadata.encode(meta).finish()

    // encrypt data
    blob.encData = new Uint8Array(
      await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, keyResource.keyData, data)
    )
    return blob
  }

  private async resolveKey(
    resolver: ResourceResolverFunc | null,
    blob: objectenc.EncryptedBlob,
    iv: Uint8Array | null,
    encryptDat: Uint8Array | null,
    keySaltMultihash: IKeySaltMultihash
  ): Promise<IKeyResource> {
    if (!resolver) {
      throw new Error('aes requires a resolver to lookup keys')
    }

    let res: IKeyResource = {
      resourceId: 'IKeyResource',
      keySaltMultihash: keySaltMultihash,
      encryptionType: objectenc.EncryptionType.EncryptionType_AES,
      encrypting: !!(encryptDat && encryptDat.length)
    }
    if (encryptDat) {
      res.encryptingData = encryptDat
    }
    await resolver(blob, res) // throws e
    if (!res.keyData || !res.keyData.extractable) {
      throw new Error('resolver failed to return an extractable key')
    }
    return res
  }
}
