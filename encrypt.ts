import { objectenc } from './pb'
import { GetEncryptionImpl } from './enc-impl-list'
import { GetCompressionImpl } from './cmp-impl-list'
import { ResourceResolverFunc } from './resource'

// Encrypt attempts to encrypt the data with the encryption type with no resolver.
export async function Encrypt(
  encType: objectenc.EncryptionType,
  cmpType: objectenc.CompressionType,
  blob: Uint8Array,
  resolver?: ResourceResolverFunc
): Promise<objectenc.EncryptedBlob> {
  let impl = GetEncryptionImpl(encType)
  let cmpImpl = GetCompressionImpl(cmpType)

  let blobUncompressed = blob
  blob = await cmpImpl.compressBlob(blob)
  let encBlob = await impl.encryptBlob(resolver || null, blob, blobUncompressed)
  encBlob.encType = encType
  encBlob.compressionType = cmpType
  return encBlob
}
