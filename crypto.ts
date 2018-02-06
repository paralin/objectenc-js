let webCrypto = window.crypto
// import * as NodeWebCrypto from 'node-webcrypto-ossl'

declare var require: any
if (!webCrypto) {
  let wc: any = require('node-webcrypto-ossl')
  webCrypto = new wc()
}
export const crypto = webCrypto
