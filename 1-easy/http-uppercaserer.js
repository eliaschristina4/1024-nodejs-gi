var http = require('http');
var port = process.argv[2];
var server = http.createServer(function(req,res) {
    console.log(req);
    var body = [];
    var bodyString;
    req.on('data', function(data) {
        body.push(data);
    });
    req.on('end', function(){
        bodyString = body.join("").toUpperCase();
        res.write(bodyString);
        res.end();
    });
});
server.listen(Number(port)); // workksss!!!!


// also doesn't work because through2-map module not found?
// const fs = require('fs');
// const http = require('http');
// const map = require('through2-map');
// const port = process.argv[2];

// const server = http.createServer(function(req, res) {
//     req.pipe(map(function(chunk) {
//         return chunk.toString().toUpperCase();
//     })).pipe(res);
// }); 


// first failed attempt
// const server = http.createServer( (req, res) => {
//     //check to see if the req method is POST
//     if (req.method === 'POST') {
//         //write request status and content type of response head
//         res.writeHead(200, {"Content-Type": "text/html"});
//         //stream req to through2-map with pipe()
//         req.pipe( map(function(chunk) {
//             //convert req to uppercase str
//             return chunk.toString().toUpperCase();
//         //stream result to response with pipe()
//         })).pipe(response);
//     } else {
//         // write method not allowed error to response header if method not POST
//         res.writeHead(405);
//     }
// });

// server.listen(+port, () => console.log(`Server is listening on http://localhost:${port}`));
