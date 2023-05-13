// const fsPromise = require('fs').promises
const fsPromises = require('fs/promises')
const path = require('path')
const fsOperations = async () =>  {
 
    try{
        // create file
      const data = await fsPromises.readFile(
        path.join(__dirname, "files", "starter.txt"),
        { encoding: "utf8" }
      );
    //   delete file
   const remove =     await fsPromises.unlink(path.join(__dirname,'files', 'starter.txt'))
      console.log(data)

    //   write file
        const newData = await fsPromises.writeFile
        (path.join(__dirname,'new-files', 'write.txt'),data);
        console.log(newData)

        // updated File
      const updateData = await fsPromises.appendFile
      (path.join(__dirname, 'new-files','write.txt'),
        '\n\nHello, i want been update')
        console.log(updateData);

        // rename file
        const rename = await fsPromises.rename
        (path.join(__dirname,'new-files', 'write.txt'),
        path.join(__dirname, 'new-files','new-write.txt')
        )
        console.log(rename)
    }catch(error){
    console.error(error)

        }
    }

    fsOperations();