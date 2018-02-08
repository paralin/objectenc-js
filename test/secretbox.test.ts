import { SecretBox } from '../secretbox'
import { objectenc } from '../pb'
import { IResource, ResourceResolverFunc } from '../resource'
import { ISecretBoxResource } from '../resource-secretbox'
import { Encrypt } from '../encrypt'
import { Decrypt } from '../decrypt'

import * as Protobuf from 'protobufjs/minimal'
import randombytes from 'randombytes'

describe('SecretBox', () => {
  it('is instantiable', () => {
    expect(new SecretBox({})).toBeInstanceOf(SecretBox)
  })

  let data = new Uint8Array([5, 4, 3, 2, 1])
  let key = randombytes(32)
  let nonce = randombytes(24)

  let sbResolver: ResourceResolverFunc = async function(
    blob: objectenc.EncryptedBlob,
    resource: IResource
  ) {
    if (resource.resourceId === 'ISecretBoxResource') {
      let keyResource = resource as ISecretBoxResource
      keyResource.keyData = key
      keyResource.nonceData = nonce
    }
  }

  it('encrypts and decrypts correctly', async () => {
    let sb = new SecretBox()
    let encBlob = await sb.encryptBlob(sbResolver, data, data)
    let dec = await sb.decryptBlob(sbResolver, encBlob)
    expect(data).toEqual(dec)
  })

  it('encrypts and decrypts correctly from registered implementation', async () => {
    let blob = await Encrypt(
      objectenc.EncryptionType.EncryptionType_SECRET_BOX,
      objectenc.CompressionType.CompressionType_SNAPPY,
      data,
      sbResolver
    )
    let decBlob = await Decrypt(blob, sbResolver)
    expect(decBlob).toEqual(data)
  })

  it('throws an error without a resolver', async () => {
    expect(
      Encrypt(objectenc.EncryptionType.EncryptionType_SECRET_BOX, data, null)
    ).rejects.toThrow()
  })
})
