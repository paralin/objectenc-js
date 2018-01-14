let webCrypto = window.crypto
import * as NodeWebCrypto from 'node-webcrypto-ossl'

if (!webCrypto) {
  webCrypto = new NodeWebCrypto()
}
export const crypto = webCrypto
