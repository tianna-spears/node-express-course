// Allows users to log in and receive a token, 
// which is necessary for authentication.
// "check username, password in POST (login) request available in req.body"
// if exist, we create new JWT and send to front-end (to log us in)
// if not, we want to send back error 

const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new BadRequestError('Please provide username and password')
    }

    const id = new Date().getDate()

    const token = jwt.sign(
        {id, username}, 
        process.env.JWT_SECRET, 
        {expiresIn:'30d'}
    );
    console.log("Generated token:", token)

    res.status(200).json({msg:'user created', token})
    }

module.exports = { 
    login
}