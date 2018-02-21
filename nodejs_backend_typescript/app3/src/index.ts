import * as express from 'express'
import * as path from 'path'

let app = express()
let PORT = 5000

app.use(express.static(path.join(__dirname, '../public')))

app.use('/media', express.static(path.join(__dirname, '../assets')))

app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`)
})