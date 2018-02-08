import { objectenc } from './pb'
import { IEncryptionImpl, ICompressionImpl } from './impl'
import { ResourceResolverFunc } from './resource'

// Passthrough doesn't encrypt or compress the data.
export class Passthrough implements IEncryptionImpl, ICompressionImpl {
  // GetEncryptionType returns the encryption type this implementation satisfies.
  public getEncryptionType(): objectenc.EncryptionType {
    return objectenc.EncryptionType.EncryptionType_UNENCRYPTED
  }

  // GetCompressionType returns the compression type this implementation satisfies.
  public getCompressionType(): objectenc.CompressionType {
    return objectenc.CompressionType.CompressionType_UNCOMPRESSED
  }

  // DecompressBlob decompresses a blob.
  public async decompressBlob(blob: Uint8Array): Promise<Uint8Array> {
    return blob
  }

  // CompressBlob compresses a blob.
  public async compressBlob(data: Uint8Array): Promise<Uint8Array> {
    return data
  }

  // ValidateMetadata checks the metadata field.
  // If metadata is not expected, this should check that it doesn't exist.
  public validateMetadata(metadata: Uint8Array): Error | null {
    if (!metadata || !metadata.length) {
      return null
    }

    return new Error('metadata not expected for unencrypted object')
  }

  // DecryptBlob decrypts an encryptedblob.
  public async decryptBlob(
    resolver: ResourceResolverFunc | null,
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
