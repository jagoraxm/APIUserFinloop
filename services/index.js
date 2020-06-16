const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        esp: moment().add(14, 'days').unix()
    }

    return jwt.encode(payload, config.secretToken)
}

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.secretToken)

            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'Token expirado'
                })
            }

            resolve(payload.sub)

        } catch (error) {
            reject({
                status: 500,
                message: 'Token invalido'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken
}