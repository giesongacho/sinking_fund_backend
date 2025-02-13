const express= require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/create', userController.CreateUser)
router.get('/list', userController.GetUser)
router.post('/delete/:uuid', userController.DeleteUser)
module.exports = router