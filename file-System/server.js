const fs = require('fs');
const path = require('path');


// first way
// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(data.toString());
//     console.log(data);
// })

// best or good ways
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data.toString());
    console.log(data);
})

lorem

//wriring File 
fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'hello, i am writting you', (err) => {
    if (err) throw err;
        console.log('write file is completed');

        fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\n\n i have been updated',                                          // appendfile is fnc for updating files
        (err) => {
            if (err) throw err;
            console.log('file update completed');

            fs.rename(
                path.join(__dirname, 'files', 'new.txt'),
                path.join(__dirname, 'files', 'final.txt'),
                (err) => {
                    if (err) throw err;
                    console.log('Rename completed');
                }
                )
        }
        )
    }
)



// console.log('helo world');            //asynchronous:

process.on("uncaughtException", (err) => {
    console.log(`'There was an error processing the data:' ${err}`);
    process.exit(1);
})








// const fs = require('fs')
// const path  = require('path')
// fs.readFile('./file/starter.txt', 'utf8',(err,data ) => {
// if(err) throw  err
// console.log(data)
// })
// fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8',(err,data ) => {
// if(err) throw err
// console.log(data)
// })
// process.on('uncaugthException', (err)=>{
//     console.error(`'There was an Error processing the data'${err}`)
//     process.exit(1)
// })
// fs.writeFile(path.join(__dirname,'files', 'new.txt'),
//   'Hello I am writing yuo',
//   (err) => {
// if(err) throw err
// console.log('Write file completed')
//  fs.rename(path.join(__dirname, 'files','new.txt'),   
//  path.join(__dirName,'files','final.txt'),
//  err => {
//     if (err) throw err
//     console.log('Rename completed')
//  }
//  )  
// })

