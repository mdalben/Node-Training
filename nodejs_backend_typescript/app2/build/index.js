"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 5000;
app.use(express.json());
app.set('port', PORT);
app.get('/', function (request, response) {
    response.send('Hello World from express ts!')
        .status(200)
        .end();
});
app.get('/user', function (request, response) {
    var user = {
        'name': 'John',
        'surname': 'Smith',
        'age': 43,
        'job': 'Policeman'
    };
    response.send(user)
        .status(200)
        .end();
});
app.put('/user', function (request, response, next) {
    if (!request.body) {
        next('No user to add');
    }
    else {
        var _a = request.body, name_1 = _a.name, surname = _a.surname, age = _a.age, job = _a.job;
        response.send({
            user: {
                name: name_1,
                surname: surname,
                age: age,
                job: job
            }
        }).status(200).end();
    }
});
app.post('/user', function (request, response, next) {
    if (!request.body)
        next('No user to update');
    else {
        var user = request.body;
        user.name = 'John';
        user.surname = 'Smith';
        user.age = 43;
        user.job = 'Policeman';
        response.send(user)
            .status(200)
            .end();
    }
});
app.delete('/user', function (request, response, next) {
    if (!request.body)
        next('No user to delete');
    else {
        var user = request.body;
        user = {};
        response.send(user)
            .status(200)
            .end();
    }
});
app.listen(app.get('port'), function () {
    console.log("Server is running at port " + PORT);
});
