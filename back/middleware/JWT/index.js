const jwt = require('jsonwebtoken'),
    config = require('config'),
    JWTKEY = config.get('JWTsecretKey')

const generateNewToken = (username)=>{
    return jwt.sign({ username: username }, JWTKEY, {
        expiresIn: '14d'
    })
}

const verifyUserToken = (token) => {
    return jwt.verify(token, JWTKEY)
}