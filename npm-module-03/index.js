console.log('hello world')
const fs = require('fs')
fs.writeFileSync('note.txt','Hello every one')
fs.appendFileSync('note.txt',' here i am')