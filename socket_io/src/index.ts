const path = require('path')
const express = require('express')
const http = require('http')

const app = express()
const server = http.Server(app)

const io = require('socket.io')(server)

const PORT = 5000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', function (request, response) {
    response.sendFile('index.html')
})

/**
 * First example
 */
/*io.on('connection', function(socket){
    console.log('Client connected!')

    socket.on('join', function(data) {
        console.log(data)
        socket.emit('messages', 'Hello from server!')
    })
})*/

/**
 * Second example with socket.io rooms
 */

let n = 1
let room_number = 0;

io.on('connection', function (socket) {
    console.log(`Client #${n} with id ${socket.id} connected!`)
    n++

    if (io.nsps['/'].adapter.rooms['room-' + room_number] && io.nsps['/'].adapter.rooms['room-' + room_number].length > 0)
        room_number++

    socket.join('room-' + room_number)

    io.in('room-' + room_number).emit('connectToRoom', 'Welcome to Root n.' + room_number)

})

server.listen(PORT, function () {
    console.log(`Server il listening at ${PORT}`)
})