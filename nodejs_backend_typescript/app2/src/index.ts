import * as express from 'express'

const app = express()
const PORT = 5000

app.use(express.json())

app.set('port', PORT)

app.get('/', function(request : express.Request, response : express.Response) {
    response.send('Hello World from express ts!')
            .status(200)
            .end()
})

app.get('/user', function(request : express.Request, response : express.Response) {
    const user = {
        'name' : 'John',
        'surname' : 'Smith',
        'age' : 43,
        'job' : 'Policeman'
    }
    response.send(user)
            .status(200)
            .end()
})

app.put('/user', function(request : express.Request, response : express.Response, next : express.Next) {
    if (!request.body) {
        next('No user to add')
    } else {
        const { name, surname, age, job} = request.body
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

app.post('/user', function(request : express.Request, response : express.Response, next : express.Next) {
    if (!request.body)
        next('No user to update')
    else {
        const user = request.body
        user.name = 'John'
        user.surname = 'Smith'
        user.age = 43
        user.job = 'Policeman'
        response.send(user)
                .status(200)
                .end()
    }
})

app.delete('/user', function(request : express.Request, response : express.Response, next : express.Next) {
    if (!request.body)
        next('No user to delete')
    else {
        let user = request.body
        user = {}
        response.send(user)
                .status(200)
                .end()
    }
})

app.listen(app.get('port'), function(){
    console.log(`Server is running at port ${PORT}`)
})