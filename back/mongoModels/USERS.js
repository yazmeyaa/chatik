const { Schema, model } = require('mongoose')

const USERS = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    birthDay: {
        type: Date,
        required: false,
        unique: false
    },
    password: {
        required: true,
        type: String
    },
    city: {
        required: false,
        type: String
    }
})

module.exports = model('USERS', USERS)