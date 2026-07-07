const jwt = require("jsonwebtoken")

const SECRET_KEY = process.env.JWT_SECRET

function generateToken(user){
    return jwt.sign(
        {
         _id: user._id,
         email: user.email,
        },
        SECRET_KEY,
        {
            expiresIn: "1d",
        }
    );
}

function verifyToken(token){
    return jwt.verify(token, SECRET_KEY)
}

module.exports = {
    generateToken,
    verifyToken,
}
