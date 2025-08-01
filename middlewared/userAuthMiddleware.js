const jwt = require('jsonwebtoken')

const accessTokenSecrete = process.env.ADMIN_ACCESS_TOKEN_SECRETE;

module.exports = async function (req, res, next) {

    try {
        const { accessToken } = req.cookies;
        if(!accessToken) {
            return res.status(401).json({message: "Unauthorize access!"});
        }
        
        const userData = await jwt.verify(accessToken, accessTokenSecrete);
        if(!userData) {
            return res.status(401).json({message: "Token expired!"});
        }
        req.user = userData;
        next()
    } catch (err) {
        return res.status(401).json({message: "Invalid Token"});

    }
    
}