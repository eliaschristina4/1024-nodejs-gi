const http = require('http');
const fs = require('fs');

const port = process.argv[2]; // process.env.PORT || 5000;
const file = process.argv[3];

const server = http.createServer( (req, res) => {
    fs.createReadStream(file).pipe(res)
} );

server.listen(+port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
});