const express = require('express');
const LoginController = require('../controller/loginController');
const router = express.Router()
const LoginAuth = require('../middleware/loginAuth')

router.post('/login', LoginController.LoginUser)
router.get('/logout', LoginController.LogoutUser)

router.get('/validate',LoginController.CheckAuth)
module.exports= router