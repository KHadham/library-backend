const jwt = require('jsonwebtoken')
const MiscHelper = require('./helpers')

const allowedAccess = "wikwik"

module.exports = {
  authInfo: (req, res, next) => {
    const headerAuth = req.headers['authorization']
    const headerSecret = req.headers['x-access-token']

    if (headerAuth !== allowedAccess) {
      return MiscHelper.response(res, null, 401, 'Unauthorized, Need access token!')
    } else if (typeof headerSecret === 'undefined') { 
      next()
    } else {
      const bearerToken = headerSecret.split(' ')
      const token = bearerToken[1]
      req.token = token
      console.log('Token stored!' + token)
      next()
    }
  },

  accesstoken: (req, res, next) => {
    const secretKey = "ahahah"
    const accessToken = req.token
    const userToken = req.headers['x-control-user']

    jwt.verify(accessToken, secretKey, (err, decoded) => {
      if (err && err.name === 'TokenExpiredError') return MiscHelper.response(res, null, 401, 'Token expired')

      if (err && err.name === 'JsonWebTokenError') return MiscHelper.response(res, null, 401, 'Invalid Token')

      if (parseInt(userToken) !== parseInt(decoded.id_user)) return MiscHelper.response(res, null, 401, 'Invalid User Token')
      console.log(decoded)
      next()
    })
  }
}
