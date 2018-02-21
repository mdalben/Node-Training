"use strict";
var User = require("../models/user");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.create = function (username, email, age) {
        var user = new User({
            username: username,
            email: email,
            age: age
        });
        user.save(function (err, res) {
            if (err && err.code === 11000)
                console.log('User already exists!');
            else if (err)
                console.log(err);
            else
                console.log(null, res);
        });
    };
    UserRepository.prototype.getUsers = function () {
        User.find({}, function (err, res) {
            if (err)
                console.log(err);
            else
                console.log(res);
        });
    };
    UserRepository.prototype.findById = function (id) {
        User.findById({ _id: id }, function (err, res) {
            if (err)
                console.log(err);
            else
                console.log(res);
        });
    };
    UserRepository.prototype.findByUsername = function (username) {
        User.findOne({ username: username }, function (err, res) {
            if (err)
                console.log(err);
            else
                console.log(res);
        });
    };
    UserRepository.prototype.updateUser = function (id, username, email, age) {
        User.findByIdAndUpdate({ _id: id }, { $set: { username: username, email: email, age: age } }, function (err, res) {
            if (err)
                console.log(err);
            else
                console.log(res);
        });
    };
    UserRepository.prototype.deleteUser = function (id) {
        User.deleteOne({ id: id }, function (err) {
            if (err)
                console.log(err);
            else
                console.log('User with id ' + id + ' deleted!');
        });
    };
    UserRepository.prototype.deleteUserByUsername = function (username) {
        User.findOneAndRemove({ username: username }, function (err, res) {
            if (err)
                console.log(err);
            else if (res)
                console.log('User with username ' + username + ' deleted!');
            else
                console.log('User not exists!');
        });
    };
    return UserRepository;
}());
module.exports = UserRepository;
