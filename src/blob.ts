import * as Protobuf from 'protobufjs/minimal'
import { ResourceResolverFunc } from './resource'
import { objectenc } from './pb'

// EncryptedBlob contains a potentially encrypted blob of data.
export class EncryptedBlob extends objectenc.EncryptedBlob {
  // Construct a EncryptedBlob with a Protobuf encrypted blob.
  constructor(proto?: objectenc.IEncryptedBlob) {
    super(proto)
  }

  // Validate checks the blob to see if it "looks ok" without actually decrypting it.
  public validate(): Error | null {
    if (!this.encData.length) {
      return new Error('encrypted blob is empty')
    }

    return null
  }
}
