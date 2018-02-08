import { objectenc } from './pb'
import { ICompressionImpl } from './impl'
import { Snappy } from './snappy'
import { Passthrough } from './passthrough'

// compressionImplList is the list of all known compression implementations.
export const compressionImplList: ICompressionImpl[] = [new Snappy(), new Passthrough()]

// compressionImplMap maps compression type to compression implementation.
export type compressionImplMap = { [key: number]: ICompressionImpl }

let impls: compressionImplMap = {}
for (let impl of compressionImplList) {
  impls[impl.getCompressionType()] = impl
}

// compressionImpls contains all known compression implementations
export const compressionImpls: compressionImplMap = impls

// GetCompressionImpl returns the matching implementation of the type or throws.
export function GetCompressionImpl(cmpType: objectenc.CompressionType): ICompressionImpl {
  let impl = impls[cmpType]
  if (!impl) {
    throw new Error(`compression type not implemented: ${cmpType}`)
  }
  return impl
}
