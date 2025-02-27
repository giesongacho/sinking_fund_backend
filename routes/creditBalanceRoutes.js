const express = require('express')
const router = express.Router()
const CreditBalanceController = require('../controller/creditBalanceController')

router.post('/create/:uuid',CreditBalanceController.CreateCreditBalance)
router.post('/list/:uuid',CreditBalanceController.BalanceList)
module.exports= router