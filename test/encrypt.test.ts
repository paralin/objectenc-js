import { Encrypt } from '../src/encrypt'
import { crypto } from '../src/crypto'
import { objectenc } from '../src/pb'
import { IResource, ResourceResolverFunc } from '../src/resource'
import { IKeyResource } from '../src/resource-key'
import * as Protobuf from 'protobufjs/minimal'

describe('Encrypt', () => {
  let data = new Uint8Array([5, 4, 3, 2, 1])
  let key = crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, [
    'encrypt',
    'decrypt'
  ])
  let keyResolver: ResourceResolverFunc = async function(
    blob: objectenc.EncryptedBlob,
    resource: IResource
  ) {
    if (resource.resourceId === 'IKeyResource') {
      let keyResource = resource as IKeyResource
      keyResource.keyData = await key
    }
  }

  it('encrypts passthrough', async () => {
    let encBlob = await Encrypt(objectenc.EncryptionType.EncryptionType_UNENCRYPTED, data)
    expect(encBlob.encData).toEqual(data)
  })
})
