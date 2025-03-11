const express = require('express')
const router = express.Router()
const CreditBalanceController = require('../controller/creditBalanceController')

router.post('/create/:uuid',CreditBalanceController.CreateCreditBalance)
router.post('/list/:uuid',CreditBalanceController.BalanceList)
router.post('/list',CreditBalanceController.GetBalance)
router.get('/available',CreditBalanceController.AvailableFund)
module.exports= router