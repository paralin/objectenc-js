import { objectenc, secretbox } from './pb'
import { IEncryptionImpl } from './impl'
import { ResourceResolverFunc } from './resource'
import { ISecretBoxResource } from './resource-secretbox'

import * as nacl from 'tweetnacl'
import * as multihashing from 'multihashing'
import * as toBuffer from 'typedarray-to-buffer'

// validateSecretBoxMetadata checks SecretBox metadata.
export function validateSecretBoxMetadata(meta: secretbox.SecretBoxMetadata): Error | null {
  return null
}

// SecretBox implements the SecretBox encryption algorithms.
export class SecretBox implements IEncryptionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  public getEncryptionType(): objectenc.EncryptionType {
    return objectenc.EncryptionType.EncryptionType_SECRET_BOX
  }

  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  public validateMetadata(metadata: Uint8Array): Error | null {
    try {
      let secretBoxMetadata = secretbox.SecretBoxMetadata.decode(metadata)
      return validateSecretBoxMetadata(secretBoxMetadata)
    } catch (e) {
      return e
    }
  }

  // DecryptBlob decrypts an encryptedblob.
  public async decryptBlob(
    resolver: ResourceResolverFunc | null,
    blob: objectenc.EncryptedBlob
  ): Promise<Uint8Array> {
    let metaErr = this.validateMetadata(blob.encMetadata)
    if (metaErr) {
      throw metaErr
    }

    if (!resolver) {
      throw new Error('secretbox requires a resolver to determine nonce and key')
    }

    let sbResource = await this.resolveSecretBoxResource(resolver, blob, null, null)
    if (!sbResource.keyData || !sbResource.nonceData) {
      throw new Error('key resource did not return a decryption key or nonce')
    }

    // let aesCtr = new aesjs.ModeOfOperation.ctr(keyResource.keyData)
    let decryptedData = nacl.secretbox.open(blob.encData, sbResource.nonceData, sbResource.keyData)
    if (!decryptedData) {
      throw new Error('data did not decrypt with secretbox open')
    }

    return decryptedData
  }

  // EncryptBlob encrypts a blob.
  public async encryptBlob(
    resolver: ResourceResolverFunc,
    data: Uint8Array,
    dataUncompressed: Uint8Array
  ): Promise<objectenc.EncryptedBlob> {
    let blob = new objectenc.EncryptedBlob({
      encType: objectenc.EncryptionType.EncryptionType_SECRET_BOX
    })
    let sbResource = await this.resolveSecretBoxResource(resolver, blob, data, dataUncompressed)
    if (!sbResource.keyData || !sbResource.nonceData) {
      throw new Error('key resource did not return a decryption key or nonce')
    }

    // build key metadata
    blob.encMetadata = secretbox.SecretBoxMetadata.encode({}).finish()

    // encrypt data
    blob.encData = nacl.secretbox(data, sbResource.nonceData, sbResource.keyData)
    return blob
  }

  private async resolveSecretBoxResource(
    resolver: ResourceResolverFunc | null,
    blob: objectenc.EncryptedBlob,
    encryptDat: Uint8Array | null,
    encryptDatUncompressed: Uint8Array | null
  ): Promise<ISecretBoxResource> {
    if (!resolver) {
      throw new Error('secretbox requires a resolver to lookup nonce and key')
    }

    let res: ISecretBoxResource = {
      resourceId: 'ISecretBoxResource',
      encryptionType: objectenc.EncryptionType.EncryptionType_SECRET_BOX,
      encrypting: !!(encryptDat && encryptDat.length)
    }
    if (encryptDat) {
      res.encryptingData = encryptDat
    }
    await resolver(blob, res) // throws e
    if (!res.keyData || !res.nonceData) {
      throw new Error('resolver failed to return a key and nonce')
    }
    return res
  }
}
