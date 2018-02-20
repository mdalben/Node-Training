const express = require('express')
const app = express()

const PORT = 5000

app.use(express.json())

app.get('/', function(request, response) {
    response.send('Hello World from express!')
            .status(200)
            .end()
})

app.get('/user', function(request, response) {
    const user = {
        'name' : 'Paolino',
        'surname' : 'Paperino',
        'age' : 80,
        'job' : 'Duck'
    }
    response.send(user)
            .status(200)
            .end()
})

app.put('/user', function(request, response, next) {
    console.log(request.body)
    if (!request.body)
        next('No user to create')
    else {
        const { name, surname, age, job } = request.body
        response.send({
            user : {
                name,
                surname,
                age,
                job
            }
        }).status(200).end()
    }
})

app.post('/user', function(request, response, next) {
    console.log(request.body)
    if (!request.body)
        next('No user to update')
    else {
        const user = request.body
        user.name = 'Ciccio'
        user.surname = 'Pasticcio'
        user.age = 40
        user.job = 'Disoccupato'
        response.send(user)
                .status(200)
                .end()
    }
})

app.delete('/user', function(request, response, next) {
    console.log(request.body)
    if (!request.body)
        next('No user to delete')
    else {
        const user = request.body
        user.name = user.surname = user.age = user.job = 'no-data'
        response.send(user)
                .status(200)
                .end()
    }
})

app.listen(PORT, function() {
    console.log(`Server il listening at port ${PORT} `);
})