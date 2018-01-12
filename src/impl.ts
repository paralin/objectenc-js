import { objectenc } from './pb'
import { ResourceResolverFunc } from './resource'

// IEncryptionImpl is an implementation of an encryption type.
export interface IEncryptionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  getEncryptionType(): objectenc.EncryptionType
  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  validateMetadata(metadata: Uint8Array): Error
  // DecryptBlob decrypts an encryptedblob.
  decryptBlob(resolver: ResourceResolverFunc, blob: objectenc.EncryptedBlob): Promise<Uint8Array>
  // EncryptBlob encrypts a blob.
  encryptBlob(resolver: ResourceResolverFunc, blob: Uint8Array): objectenc.EncryptedBlob
}