import { objectenc } from './pb'

// ISecretBoxResource is used to look up secretbox key and nonce.
export interface ISecretBoxResource {
  // resourceId is a unique identifier of this resource type.
  resourceId: 'ISecretBoxResource'
  // EncryptionType is the expected encryption type.
  encryptionType: objectenc.EncryptionType
  // Encrypting indicates if we are encrypting or decrypting.
  encrypting: boolean
  // EncryptingData contains the data we are encrypting, if we are.
  // This data may be compressed already.
  encryptingData?: Uint8Array

  // NonceData is the resolved nonce data.
  // Filled by resolver.
  // 24 bytes long
  nonceData?: Uint8Array

  // KeyData is the resolved psk data.
  // Filled by resolver.
  // 32 bytes long
  keyData?: Uint8Array
}
