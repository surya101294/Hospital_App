var jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers?.authorization
    if (token) {
        jwt.verify(token, 'shhhhh', function (err, decoded) {
            if (decoded) {
                console.log(decoded)
                // req.body.user = decoded.userID
                next()
            } else {
                res.send({ "msg": "Something went wrog", "err": err.message })
            }
        })
    } else {
        res.send({ "msg": "Please Login again" })
    }

}

module.exports = { authenticate }