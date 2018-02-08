import { objectenc } from './pb'
import { IEncryptionImpl } from './impl'
import { AES } from './aes'
import { SecretBox } from './secretbox'
import { Passthrough } from './passthrough'

// encryptionImplList is the list of all known encryption implementations.
export const encryptionImplList: IEncryptionImpl[] = [new Passthrough(), new AES(), new SecretBox()]

// encryptionImplMap maps encryption type to encryption implementation.
export type encryptionImplMap = { [key: number]: IEncryptionImpl }

let impls: encryptionImplMap = {}
for (let impl of encryptionImplList) {
  impls[impl.getEncryptionType()] = impl
}

// encryptionImpls contains all known encryption implementations
export const encryptionImpls: encryptionImplMap = impls

// GetEncryptionImpl returns the matching implementation of the type or throws.
export function GetEncryptionImpl(encType: objectenc.EncryptionType): IEncryptionImpl {
  let impl = impls[encType]
  if (!impl) {
    throw new Error(`encryption type not implemented: ${encType}`)
  }
  return impl
}
