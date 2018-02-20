const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()
const PORT = 5000

const sslOptions = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
}

https.createServer(sslOptions, app).listen(PORT, function() {
    console.log(`Server il listening at port ${PORT} `)
})

app.get('/', function(request, response) {
    response.send('Hello World!')
            .status(200)
            .end()
})