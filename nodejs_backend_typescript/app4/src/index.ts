import * as express from 'express'
import * as https from 'https'
import * as fs from 'fs'

const app = express()
const PORT = 5000
const sslOptions = {
    key : fs.readFileSync('./source/key.pem'),
    cert : fs.readFileSync('./source/cert.pem')
}

https.createServer(sslOptions, app).listen(PORT, function(){
    console.log(`Server il listening at ${PORT}`)
})

app.get('/', function(request : express.Request, response : express.Response){
    response.send('Hello world from https')
            .status(200)
            .end()
})