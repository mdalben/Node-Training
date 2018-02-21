"use strict";
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});
var User = mongoose.model("User", userSchema);
module.exports = User;
