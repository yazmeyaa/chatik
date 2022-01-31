const JWT = require('jsonwebtoken')
const JWTsecretKey = require('config').get('JWTsecretKey')

const verifyToken = async function(req, res){
    const {token} = req.body
    const verify = (tok, secret) => {
        try{
            const decoded = JWT.verify(tok, secret)
            console.log(decoded)
            return res.status(200).send({'message': 'Ok!'})
        }
        catch(error){
            return res.status(400).send({'message': 'Invalid token!'})
        }
    }
    verify(token, JWTsecretKey)
}

module.exports = verifyToken