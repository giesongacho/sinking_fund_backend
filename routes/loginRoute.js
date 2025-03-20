const express = require('express');
const LoginController = require('../controller/loginController');
const router = express.Router()
const auth = require('../middleware/loginAuth')
router.post('/login', LoginController.LoginUser)
// router.get('/logout',auth, LoginController.LogoutUser)

router.get('/validate',LoginController.CheckAuth)
module.exports= router