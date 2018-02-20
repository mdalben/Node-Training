const http = require('http')
const PORT = 5000

const app = new http.Server()

app.on('request', function(request, response) {
    response.writeHead(200, { 'Content-type' : 'text-plain' })
    response.write('Hello World!')
    response.end('\n')
})

app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`)
})