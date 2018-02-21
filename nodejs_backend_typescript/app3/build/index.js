"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var PORT = 5000;
app.use(express.static(path.join(__dirname, '../public')));
app.use('/media', express.static(path.join(__dirname, '../assets')));
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
