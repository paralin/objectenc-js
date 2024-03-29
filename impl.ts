import { objectenc } from './pb'
import { ResourceResolverFunc } from './resource'

// IEncryptionImpl is an implementation of an encryption type.
export interface IEncryptionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  getEncryptionType(): objectenc.EncryptionType
  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  validateMetadata(metadata: Uint8Array): Error | null
  // DecryptBlob decrypts an encryptedblob.
  decryptBlob(
    resolver: ResourceResolverFunc | null,
    blob: objectenc.EncryptedBlob
  ): Promise<Uint8Array>
  // EncryptBlob encrypts a blob.
  encryptBlob(
    resolver: ResourceResolverFunc | null,
    blob: Uint8Array,
    blobUncompressed: Uint8Array
  ): Promise<objectenc.EncryptedBlob>
}

// ICompressionImpl is a compression implementation.
export interface ICompressionImpl {
  // GetCompressionType returns the compression type this implementation satisfies.
  getCompressionType(): objectenc.CompressionType
  // DecompressBlob decompresses a blob.
  decompressBlob(blob: Uint8Array): Promise<Uint8Array>
  // CompressBlob compresses a blob.
  compressBlob(data: Uint8Array): Promise<Uint8Array>
}
