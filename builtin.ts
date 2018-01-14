import { objectenc } from './pb'
import { IEncryptionImpl } from './impl'
import { AES } from './aes'

// getBuiltInImplementation returns the built-in implementation of the type, or nil if not found.
export function getBuiltInImplementation(
  encType: objectenc.EncryptionType
): IEncryptionImpl | null {
  switch (encType) {
    case objectenc.EncryptionType.EncryptionType_AES:
      return new AES()
    default:
      return null
  }
}
