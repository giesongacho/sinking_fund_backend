const express = require('express')
const router = express.Router();
const UserFundController = require('../controller/userFundController');
const LoginAuth = require('../middleware/loginAuth');

router.post('/create/:uuid',LoginAuth, UserFundController.Userfund);
router.get('/list/:uuid',LoginAuth, UserFundController.UserFundList)
router.get('/list/', LoginAuth,UserFundController.getAllContribution)
module.exports = router;