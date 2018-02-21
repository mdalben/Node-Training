import * as express from 'express'

let app = express()
let PORT = 5000

app.set('port', PORT)

app.get('/', function(request : express.Request, response : express.Response) {
    response.send('Hello World!')
            .status(200)
            .end()
})

app.listen(app.get('port'), function(){
    console.log(`Server is running at port ${PORT}`)
})