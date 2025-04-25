const express= require('express')
const router = express.Router()
const userController = require('../controller/userController')
const LoginAuth = require('../middleware/loginAuth')

router.post('/create', userController.CreateUser)
router.get('/list',LoginAuth, userController.GetUser)
router.post('/delete/:uuid',LoginAuth, userController.DeleteUser)
module.exports = router