const express = require('express');
const router = express.Router()

const creditPaymentController = require('../controller/creditPaymentController.js')
const LoginAuth = require('../middleware/loginAuth')

router.post('/create/:uuid',LoginAuth, creditPaymentController.CreateCreditPayment)
router.get('/list/:uuid',LoginAuth, creditPaymentController.ListPayment)
module.exports = router