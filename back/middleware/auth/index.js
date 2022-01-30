const JWT = require('jsonwebtoken')
const config = require('config')
const secretJWT = config.get('JWTsecretKey')

const auth = (req, res) => {
     const { username, rememberMe } = req.body
     if(!username){
          return res.status(400).send(
               {
                    'message': 'Имя пользователя не может быть пустым!'
               }
          )
     }
     
     const userToken = JWT.sign({'username': username, 'rememberMe': rememberMe}, secretJWT, {
          expiresIn: '1d'
     })
     return res.status(200).send(
          {
               JWT: userToken
          }
     )
}

module.exports = auth