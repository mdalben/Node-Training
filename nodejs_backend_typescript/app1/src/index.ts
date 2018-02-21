import * as http from "http"

const app = new http.Server()
const PORT = 5000

app.on('request', function(request : http.ServerRequest, response : http.ServerResponse) {
    response.writeHead(200, {'Content-type' : 'text-plain'})
    response.write('Hello World!')
    response.end()
})

app.listen(PORT, function() {
    console.log(`Server is running at port ${PORT}`)
})