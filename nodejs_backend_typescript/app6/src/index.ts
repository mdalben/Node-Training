import connect = require('./db/context')
import UserRepository = require('./repository/userRepository')
import { argv } from 'process'
import ObjectId = require('mongodb');
import mongoose = require('mongoose')

connect()

const userRepository = new UserRepository

const command = argv[2]

switch(command) {
    case 'addUser':
        userRepository.create(argv[3], argv[4], parseInt(argv[5]))
        break
    case 'deleteUser':
        userRepository.deleteUser(mongoose.Types.ObjectId(argv[3]))
        break
    case 'updateUser':
        userRepository.updateUser(mongoose.Types.ObjectId(argv[3]), argv[4], argv[5], parseInt(argv[6]))
        break
    case 'getUsers':
        userRepository.getUsers()
        break
    case 'findUserById':
        userRepository.findById(mongoose.Types.ObjectId(argv[3]))
        break
    case 'findUserByUsername':
        userRepository.findByUsername(argv[3])
        break
    case 'deleteUserByUsername':
        userRepository.deleteUserByUsername(argv[3])
        break
}