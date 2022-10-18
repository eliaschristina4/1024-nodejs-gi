const fs = require('fs');
let file = process.argv[2];

fs.readFile(file, (err, contents) => {
    let lines = contents.toString().split('\n').length - 1;
    console.log(lines);
})