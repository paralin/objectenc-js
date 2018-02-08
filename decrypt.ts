import { objectenc } from './pb'
import { GetEncryptionImpl } from './enc-impl-list'
import { GetCompressionImpl } from './cmp-impl-list'
import { ResourceResolverFunc } from './resource'

// Decrypt attempts to decrypt the data with an optional resolver.
export async function Decrypt(
  encBlob: objectenc.EncryptedBlob,
  resolver?: ResourceResolverFunc
): Promise<Uint8Array> {
  let impl = GetEncryptionImpl(encBlob.encType)
  let cmpImpl = GetCompressionImpl(encBlob.compressionType)
  let decBlob = await impl.decryptBlob(resolver || null, encBlob)
  return cmpImpl.decompressBlob(decBlob)
}
