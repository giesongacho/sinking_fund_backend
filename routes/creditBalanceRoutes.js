const express = require('express')
const router = express.Router()
const CreditBalanceController = require('../controller/creditBalanceController')
const LoginAuth = require('../middleware/loginAuth')

router.post('/create/:uuid',LoginAuth,CreditBalanceController.CreateCreditBalance)
router.post('/list/:uuid',LoginAuth,CreditBalanceController.BalanceList)
router.post('/list',LoginAuth,CreditBalanceController.GetBalance)
router.get('/available',LoginAuth,CreditBalanceController.AvailableFund)

module.exports= router