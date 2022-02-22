export default function encode (uint8array) {
  let result = [];

  console.log(uint8array.toString())

  for (let i = 0, length = uint8array.length; i < length; i++) {
    result.push(String.fromCharCode(uint8array[i]))
  }

  return result.join('').replace(/\s+/g, '')
}
