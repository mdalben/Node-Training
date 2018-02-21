"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 5000;
app.set('port', PORT);
app.get('/', function (request, response) {
    response.send('Hello World!')
        .status(200)
        .end();
});
app.listen(app.get('port'), function () {
    console.log("Server is running at port " + PORT);
});
