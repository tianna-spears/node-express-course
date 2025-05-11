const express = require('express')
const router = express.Router()

const { hello } = require('../controllers/hello')

const authenticationMiddleWare = require('../middleware/auth')

router.route('/').get(authenticationMiddleWare, hello);

module.exports = router;