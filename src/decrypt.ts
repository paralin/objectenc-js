import { objectenc } from './pb'
import { GetEncryptionImpl } from './impl-list'
import { ResourceResolverFunc } from './resource'

// Decrypt attempts to decrypt the data with an optional resolver.
export async function Decrypt(
  encBlob: objectenc.EncryptedBlob,
  resolver?: ResourceResolverFunc
): Promise<Uint8Array> {
  let impl = GetEncryptionImpl(encBlob.encType)
  return impl.decryptBlob(resolver, encBlob)
}
