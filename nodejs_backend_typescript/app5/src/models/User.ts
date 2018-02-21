import mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String, 
        required : true
    }
})

const User = mongoose.model("User", userSchema)

export = User