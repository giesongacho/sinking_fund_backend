const jwt = require('jsonwebtoken');
const {accessToken} = require('../config/accessToken')

const LoginAuth = async (req,res,next) => {
    const token = req.cookies.authToken;
    if(!token){
        return res.status(401).json({message: 'No token,authorization denied'})
    }
    try {
        const decoded = jwt.verify(token, 'LONG-TOKEN'); // Adjust secret
        req.user = { id: decoded.id };
        next();
      } catch (err) {
        if (err instanceof jwt.TokenExpiredError || err instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({
            message: 'Token is expired or invalid',
            error: err.name,
          });
        }
        throw err;
      }
}
module.exports = LoginAuth