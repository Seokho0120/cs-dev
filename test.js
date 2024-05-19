const fs = require('fs')
const path = require('path')
const a = fs.readFileSync(path.join(__dirname, 'test.json'))
const b = JSON.parse(a)

const test = {
  "a": () => {
    console.log(111)
  },
  "b": undefined
}
console.log(test)