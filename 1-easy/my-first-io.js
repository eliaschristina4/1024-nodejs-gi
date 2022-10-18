const fs = require('fs');

let contents = fs.readFileSync(process.argv[2]);

let lines = contents.toString().split('\n').length - 1;

console.log(lines);

/* fs.readFile( process.argv[2], (err, data) => {
    if (err) return err;
    let count = 0;
    if (data.includes('/n')) count += 1;
    return count;
}); */



// ideas/notes
// function readFile()
// file.includes()