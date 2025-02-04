const express = require('express')
const router = express.Router()
const CreditBalanceController = require('../controller/creditBalanceController')

router.post('/create/:uuid',CreditBalanceController.CreateCreditBalance)
router.get('/list/:uuid',CreditBalanceController.CreateCreditBalance)
module.exports= router