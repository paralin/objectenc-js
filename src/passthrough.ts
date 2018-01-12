import { objectenc } from './pb'
import { IEncryptionImpl } from './impl'
import { ResourceResolverFunc } from './resource'

// Passthrough doesn't encrypt the data.
export class Passthrough implements IEncryptionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  public getEncryptionType(): objectenc.EncryptionType {
    return objectenc.EncryptionType.EncryptionType_UNENCRYPTED
  }

  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  public validateMetadata(metadata: Uint8Array): Error {
    if (!metadata || !metadata.length) {
      return null
    }

    return new Error('metadata not expected for unencrypted object')
  }

  // DecryptBlob decrypts an encryptedblob.
  public async decryptBlob(
    resolver: ResourceResolverFunc,
    blob: objectenc.EncryptedBlob
  ): Promise<Uint8Array> {
    return blob.encData
  }

  // EncryptBlob encrypts a blob.
  public async encryptBlob(
    resolver: ResourceResolverFunc,
    blob: Uint8Array
  ): Promise<objectenc.EncryptedBlob> {
    return new objectenc.EncryptedBlob({
      encType: objectenc.EncryptionType.EncryptionType_UNENCRYPTED,
      encData: blob,
      encMetadata: new Uint8Array(0)
    })
  }
}
