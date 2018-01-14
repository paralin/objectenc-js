import { objectenc } from './pb'
import { GetEncryptionImpl } from './impl-list'
import { ResourceResolverFunc } from './resource'

// Encrypt attempts to encrypt the data with the encryption type with no resolver.
export async function Encrypt(
  encType: objectenc.EncryptionType,
  blob: Uint8Array,
  resolver?: ResourceResolverFunc
): Promise<objectenc.EncryptedBlob> {
  let impl = GetEncryptionImpl(encType)
  let encBlob = await impl.encryptBlob(resolver || null, blob)
  encBlob.encType = encType
  return encBlob
}
