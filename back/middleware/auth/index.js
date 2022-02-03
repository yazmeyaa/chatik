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
     console.log(DBdata)
     if(DBdata !== null && DBdata !== undefined){
          const isDataValid = await bcrypt.compareSync(password, DBdata.password)
     } else{
          return res.status(400).send({'message': 'Имя пользователя или пароль введены неверно!'})
     }

     if(isDataValid === true) {
          const userToken = JWT.sign({'username': username}, secretJWT, {
               expiresIn: '1d'
          })
          return res.status(200).send({JWT: userToken})
     } else if(!isDataValid ){
          return res.status(400).send({'message': 'Имя пользователя или пароль введены неверно!'})
     }
}

module.exports = auth