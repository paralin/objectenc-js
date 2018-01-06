import * as Protobuf from 'protobufjs/minimal'
import { objectenc } from './pb'

// EncryptedBlob contains a potentially encrypted blob of data.
export class EncryptedBlob {
  private pb: objectenc.EncryptedBlob

  constructor(proto?: objectenc.IEncryptedBlob) {
    this.pb = new objectenc.EncryptedBlob(proto)
  }
}

// Encrypt attempts to encrypt a blob, assuming no resources will need to be resolved.
export function Encrypt(encType: objectenc.EncryptionType, blob: Protobuf.Buffer) {
  return EncryptWithResolver()
}
