import encrypt from './encrypt.js'

let key, message, state = 0

// Ask user for key
process.stdout.write('Key:')

// Start listening
process.stdin.on('data', data => {
  switch (state) {
    case 0:
      key = data
      console.clear()
      process.stdout.write('Message:')
      state = 1
      break
    case 1:
      message = data
      console.clear()
      const result = encrypt(key, message)
      process.stdout.write(result)
      process.exit()
  }
})
