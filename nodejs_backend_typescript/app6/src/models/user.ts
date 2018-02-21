import mongoose = require('mongoose')
import { truncate } from 'fs';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

const User = mongoose.model("User", userSchema)

export = User