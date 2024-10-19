const jwt = require('jsonwebtoken');
const secretKey = "E2B86";

exports.signIn = (data) => {
    return token = jwt.sign(
        data , secretKey , { expiresIn: '1h' }
    )
}

