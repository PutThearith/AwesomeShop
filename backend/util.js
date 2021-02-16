const  jwt = require("jsonwebtoken")
import config from './config'
const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        usernam: user.username,
        email: user.email,
        isAdmin: user.usAdmin,
    }, config.JWT_SECRET, {
        expiresIn: '24h'
    })
}
export {
    getToken
}