const users = require('../../models/users')
const bcryptSecret = require('config').get('bcryptSecret')
const bcrypt = require('bcrypt')

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
    return res.status(200).send({'message': 'Account created!'})
}

module.exports = registerNewUser