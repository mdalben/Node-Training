"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var User = require("./models/User");
mongoose.connect('mongodb://localhost:27017/typegoosetest');
var user = new User({ email: 'dalben.michele@outlook.it', firstName: 'Michele', lastName: 'Dal Ben' });
user.save();
console.log(user);
