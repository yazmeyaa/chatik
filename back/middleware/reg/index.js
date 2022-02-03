const users = require('../../models/users')
const bcryptSecret = require('config').get('bcryptSecret')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const secretJWT = require('config').get('JWTsecretKey')

async function registerNewUser(req, res){
    const {username, password} = req.body
    const isAccountExist = await users.findOne({username: username})
    if(isAccountExist){
        return res.status(400).send({'message': 'Account is already existing!'})
    }
    const hashed = await bcrypt.hash(password, 10)
    const newUser = new users({
        username: username,
        password: hashed
    })
    newUser.save()

    const userToken = JWT.sign({'username': username}, secretJWT, {
        expiresIn: '1d'
    })

    return res.status(200).send({'message': 'Account created!', 'JWT': userToken})
}

module.exports = registerNewUser