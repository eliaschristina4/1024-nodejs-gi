const http = require('http');
const URL = require('url').URL;
const port = process.argv[2];

function convertISOTimeToJson(url) {
    const date = new Date(url.searchParams.get('iso'))

    if ('/api/parsetime' === url.pathname) {
        return { 
            'hour': date.getHours(), 
            'minute': date.getMinutes(), 
            'second': date.getSeconds()
        }
    }

    if ('/api/unixtime' === url.pathname) {
        return { 
            'unixtime': date.getTime()
        }
    }
}

const server = http.createServer( (req, res) => {
    const url = new URL(`${req.scheme}://${req.host}${req.url}`)
    const time = convertISOTimeToJson(url)

    if ('GET' === req.method && time) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(time))
    } else {
        res.writeHead(404)
    }

    res.end()
    

});

server.listen(port);