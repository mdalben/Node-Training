"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connect = require("./db/context");
var UserRepository = require("./repository/userRepository");
var process_1 = require("process");
var mongoose = require("mongoose");
connect();
var userRepository = new UserRepository;
var command = process_1.argv[2];
switch (command) {
    case 'addUser':
        userRepository.create(process_1.argv[3], process_1.argv[4], parseInt(process_1.argv[5]));
        break;
    case 'deleteUser':
        userRepository.deleteUser(mongoose.Types.ObjectId(process_1.argv[3]));
        break;
    case 'updateUser':
        userRepository.updateUser(mongoose.Types.ObjectId(process_1.argv[3]), process_1.argv[4], process_1.argv[5], parseInt(process_1.argv[6]));
        break;
    case 'getUsers':
        userRepository.getUsers();
        break;
    case 'findUserById':
        userRepository.findById(mongoose.Types.ObjectId(process_1.argv[3]));
        break;
    case 'findUserByUsername':
        userRepository.findByUsername(process_1.argv[3]);
        break;
    case 'deleteUserByUsername':
        userRepository.deleteUserByUsername(process_1.argv[3]);
        break;
}
