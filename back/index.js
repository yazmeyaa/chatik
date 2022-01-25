const express = require('express'),
    http = require('http'),
    config = require('config'),
    app = express(),
    server = http.createServer(app),
    { Server } = require('socket.io'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    io = new Server(server),
    mongoKey = config.get('mongoSecretKey')


async function startServer(){
    mongoose.connect(mongoKey, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        const PORT = config.get('PORT')
        app.listen(PORT, (error)=>{
            error ? console.log(error) : console.log(`Прослушиваем порт ${PORT}`)
        })
    })
    .then(()=>{
        console.log('Успешно подключились!')
    })
    .catch(e=>{
        throw new Error(e)
    })
}

startServer()

