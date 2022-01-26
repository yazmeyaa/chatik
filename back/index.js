const express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    config = require('config'),
    app = express(),
    server = http.createServer(app),
    { Server } = require('socket.io'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    io = new Server(server),
    mongoKey = config.get('mongoSecretKey'),
    urlencodedParser = bodyParser.json()


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


app.use(urlencodedParser, (req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "authorization, Origin, Content-type")
    if(req.method == "OPTIONS"){
        return res.status(200).send("ok");
    }
    next();
})

app.post('/auth', (req, res)=>{
    const {username} = req.body
    console.log(username)
    return res.status(200).send({message: '123'})
})