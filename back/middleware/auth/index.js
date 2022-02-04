const JWT = require('jsonwebtoken')
const config = require('config')
const secretJWT = config.get('JWTsecretKey')
const user = require('../../models/users')
const bcrypt = require('bcrypt')

const auth = async function(req, res){
     const { username, password } = req.body

     if(!username){
          return res.status(400).send(
               {
                    'message': 'Имя пользователя не может быть пустым!'
               }
          )
     }

     const DBdata = await user.findOne({username: username})
     if(DBdata){
          const isDataValid = await bcrypt.compareSync(password, DBdata.password)

          if(isDataValid === true) {
               const userToken = JWT.sign({'username': username}, secretJWT, {
                    expiresIn: '1d'
               })
               return res.status(200).send({JWT: userToken})
          }

     } else{
          return res.status(400).send({'message': 'Имя пользователя или пароль введены неверно!'})
     }
}

module.exports = auth