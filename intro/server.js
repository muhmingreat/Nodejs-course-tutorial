// const request  = require()
// console.log('Hello world node')
// console.log(global)
//  const os = require("os")
//  const path = require('path')
// const math = require('./math')
// const age = require('./uber')
const uber  = require('./uber')
uber.uberReady()

const fs = require('fs')

uber.fuelLimit()
fs.writeFileSync('note.txt', 'My Name is Muhmin' )
fs.appendFileSync('note.', ' am a student of DLT',(err) =>{
if(err)  {
  console.log(`${err}there is error`)  
}
})
fs.renameSync('note.txt','final.txt')
fs.unlinkSync('final.txt')









// const age = age.birthYear(2000)
// console.log(age)
//  const add = math.add(50,30)
//  const sum = math.sum(2, 10)
//  const sub = math.sub(80, 40)
//  const div = math.div(100,10)
// console.log(add)
// console.log(sum)
// console.log(div)
// console.log(sub)
















//  console.log(os.type())
//  console.log(os.version())
//  console.log(os.homedir())
//  console.log(__dirname)
//  console.log(__filename)
//  console.log(path.dirname(__dirname));
//  console.log(path.dirname(__filename))
//  console.log(path.basename(__filename));
//  console.log(path.parse(__filename));