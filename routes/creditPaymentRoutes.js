const express = require('express');
const router = express.Router()

const creditPaymentController = require('../controller/creditPaymentController.js')


router.post('/create/:uuid', creditPaymentController.CreateCreditPayment)
module.exports = router