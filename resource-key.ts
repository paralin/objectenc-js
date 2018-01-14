import { objectenc } from './pb'

// IKeySaltMultihash is a key multihash and salt.
export interface IKeySaltMultihash {
  keyHash: Uint8Array
  keyHashSalt: Uint8Array
}

// IKeyResource is used to look up a key.
export interface IKeyResource {
  // resourceId is a unique identifier of this resource type.
  resourceId: 'IKeyResource'
  // KeySaltMultihash is the key multihash with a prefixed salt.
  keySaltMultihash: IKeySaltMultihash
  // EncryptionType is the expected encryption type.
  encryptionType: objectenc.EncryptionType
  // Encrypting indicates if we are encrypting or decrypting.
  encrypting: boolean
  // EncryptingData contains the data we are encrypting, of we are.
  encryptingData?: Uint8Array

  // KeyData is the resolved key data.
  // Filled by resolver.
  keyData?: CryptoKey
}
