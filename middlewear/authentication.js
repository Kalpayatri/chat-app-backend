// generateSecretKey.js
const crypto = require('crypto');

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

const secretKey = generateRandomString(64); 
console.log(secretKey); 

module.exports = secretKey;


