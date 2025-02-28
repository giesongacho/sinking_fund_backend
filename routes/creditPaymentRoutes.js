const express = require('express');
const router = express.Router()

const creditPaymentController = require('../controller/creditPaymentController.js')

router.post('/create/:uuid', creditPaymentController.CreateCreditPayment)
router.get('/list/:uuid', creditPaymentController.ListPayment)
module.exports = router