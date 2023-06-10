// The cat command - read a file and output it's contents.
// This is the first step in building a command line tool.
// It should work like this:
// $ node step1.js one.txt
// This is file one.


// Usage: node step1.js filename
//NOTE unlike the real cat command, this program only takes one filename.
//NOTE unlike python the require files must also be assigned to a variable
const fs = require ('fs');
const process = require('process');

//NOTE process.argv is an array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

function cat(path){
    //following the node convention of using callbacks
    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }else{
            console.log(data);
        }
    })
}

cat(process.argv[2]);