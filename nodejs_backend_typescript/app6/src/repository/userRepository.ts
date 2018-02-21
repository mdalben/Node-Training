import User = require('../models/user')
import { ObjectId } from 'mongodb';

class UserRepository {

    create(username: String, email: String, age: Number) {
        const user = new User({
            username,
            email,
            age
        })
        user.save(function(err, res) {
            if (err && err.code === 11000)
                console.log('User already exists!')
            else if (err) 
                console.log(err)
                else console.log(null, res)
        })
    }

    getUsers() {
        User.find({}, function(err, res) {
            if (err)
                console.log(err)
            else console.log(res)
        })
    }

    findById(id : ObjectId) {
        User.findById({_id : id}, function(err, res){
            if (err)
                console.log(err)
            else console.log(res)
        })
    }

    findByUsername(username : String) {
        User.findOne({username : username}, function(err, res) {
            if (err)
                console.log(err)
            else console.log(res)
        })
    }

    updateUser(id : ObjectId, username : String, email : String, age : Number) {
        User.findByIdAndUpdate({_id : id}, { $set : {username, email, age}}, function(err,res){
            if (err)
                console.log(err)
            else console.log(res)
        })
    }

    deleteUser(id : ObjectId) {
        User.deleteOne({id : id}, function(err) {
            if (err)
                console.log(err)
            else console.log('User with id ' + id + ' deleted!')
        })
    }

    deleteUserByUsername(username : String) {
        User.findOneAndRemove({username : username}, function(err, res) {
            if (err)
                console.log(err)
            else if (res) 
                console.log('User with username ' + username + ' deleted!')
                else console.log('User not exists!')
        }) 
    }

}

export = UserRepository