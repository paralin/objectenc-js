let webCrypto = window.crypto
if (!webCrypto) {
  let webCryptoCtor = require('node-webcrypto-ossl')
  webCrypto = new webCryptoCtor()
}
export const crypto = webCrypto
