"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app = new http.Server();
var PORT = 5000;
app.on('request', function (request, response) {
    response.writeHead(200, { 'Content-type': 'text-plain' });
    response.write('Hello World!');
    response.end();
});
app.listen(PORT, function () {
    console.log("Server is running at port " + PORT);
});
