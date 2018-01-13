let webCrypto = window.crypto
if (!webCrypto) {
  let require: any
  let webCryptoCtor = require('node-webcrypto-ossl')
  webCrypto = new webCryptoCtor()
}
export const crypto = webCrypto
