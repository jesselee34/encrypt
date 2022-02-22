import sha from '@aws-crypto/sha256-js'
import encode from './encode.js'

export default function encrypt (key, message) {
  const hash = new sha.Sha256()
  hash.update(`${key.toString().trim()}${message.toString().trim()}`)
  return encode(hash.digestSync())
}
