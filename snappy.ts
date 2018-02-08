import { ICompressionImpl } from './impl'
import { objectenc } from './pb'

import * as SnappyJS from 'snappyjs'

// Snappy is the Google Snappy compression type.
export class Snappy implements ICompressionImpl {
  // GetCompressionType returns the compression type this implementation satisfies.
  public getCompressionType(): objectenc.CompressionType {
    return objectenc.CompressionType.CompressionType_SNAPPY
  }

  // DecompressBlob decompresses a blob.
  public async decompressBlob(blob: Uint8Array): Promise<Uint8Array> {
    return SnappyJS.uncompress(blob)
  }

  // CompressBlob compresses a blob.
  public async compressBlob(blob: Uint8Array): Promise<Uint8Array> {
    return SnappyJS.compress(blob)
  }
}
