import { EncryptedBlob, Encrypt } from '../src/blob'
import { objectenc } from '../src/pb'
import * as Protobuf from 'protobufjs/minimal'

describe('EncryptedBlob', () => {
  it('is instantiable', () => {
    expect(new EncryptedBlob()).toBeInstanceOf(EncryptedBlob)
  })
})

describe('Encrypt', () => {
  it('encrypts using passthrough (no encryption)', () => {
    let data = 'testing'
    let bw = new Protobuf.BufferWriter()
    bw.string(data)
    let dataBin = bw.finish()
    Encrypt(objectenc.EncryptionType.EncryptionType_UNENCRYPTED, dataBin)
  })
})
