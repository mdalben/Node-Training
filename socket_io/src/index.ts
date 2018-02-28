const path = require('path')
const express = require('express')
const http = require('http')

const app = express()
const server = http.Server(app)

const io = require('socket.io')(server)

const PORT = 5000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', function(request, response) {
    response.sendFile('index.html')
})

io.on('connection', function(socket){
    console.log('Client connected!')

    socket.on('join', function(data) {
        console.log(data)
        socket.emit('messages', 'Hello from server!')
    })
})

server.listen(PORT, function(){
    console.log(`Server il listening at ${PORT}`)
})