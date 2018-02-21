import * as mongoose from 'mongoose';
import User = require('./models/User')

mongoose.connect('mongodb://localhost:27017/typegoosetest');

const user = new User({email : 'dalben.michele@outlook.it', firstName : 'Michele', lastName : 'Dal Ben'})

user.save()

console.log(user);