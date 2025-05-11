// Provides a protected endpoint that requires a valid token, 
// demonstrating how to secure routes with JWT.

// "Setup authentication so only the request with JWT can access the Hello route (successful login)"

const express= require('express');
const CustomAPIError = require('../errors/custom-error');
const router= express.Router()
const jwt = require('jsonwebtoken');


const hello = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({ 
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`})
}

module.exports = {
    hello
}