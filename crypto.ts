let webCrypto: Crypto
// import * as NodeWebCrypto from 'node-webcrypto-ossl'

declare var window: any
declare var require: any
if (typeof window !== 'undefined' && window && window.crypto) {
  webCrypto = window.crypto
} else {
  let wc: any = require('node-webcrypto-ossl')
  webCrypto = new wc()
}
export const crypto = webCrypto
