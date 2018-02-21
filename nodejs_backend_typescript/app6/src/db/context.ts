import mongoose = require('mongoose')

mongoose.Promise = global.Promise

function connect() {
    mongoose.connect('mongodb://localhost:27017/typegoosetest', {useMongoClient: true})
}

export = connect