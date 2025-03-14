const express = require('express');
const LoginController = require('../controller/loginController');
const router = express.Router()
const auth = require('../middleware/loginAuth')
router.post('/login',auth, LoginController.LoginUser)

module.exports= router