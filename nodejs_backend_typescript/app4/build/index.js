"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var https = require("https");
var fs = require("fs");
var app = express();
var PORT = 5000;
var sslOptions = {
    key: fs.readFileSync('./source/key.pem'),
    cert: fs.readFileSync('./source/cert.pem')
};
https.createServer(sslOptions, app).listen(PORT, function () {
    console.log("Server il listening at " + PORT);
});
app.get('/', function (request, response) {
    response.send('Hello world from https')
        .status(200)
        .end();
});
