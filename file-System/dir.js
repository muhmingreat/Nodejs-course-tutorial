 const fs = require('fs')
 const path = require('path')
// if (!fs.existsSync(path.join(__dirname, "files", "folder"))) {
//   fs.mkdir(path.join(__dirname, "files", "Directory"), (err) => {
//     if (err) throw err;
//     console.log("directory is successfully created");
//   });
// } else {
//   console.log("Directory already exists");
// }
//delete file
if(fs.existsSync(path.join(__dirname, "files", "Directory"))){

    fs.rmdir(path.join(__dirname, "files", "ogbon.txt"), (err) => {
        if (err) throw err;
        console.log("directory is successfully deleted");
    });
}