const express = require('express')
const router = express.Router()
const CreditRequestController = require('../controller/creditRequestController')
const LoginAuth = require('../middleware/loginAuth')

router.post('/create/:uuid',LoginAuth,CreditRequestController.CreateCreditRequest)
router.get('/list',LoginAuth, CreditRequestController.ListCreditRequest)
router.get('/list/interest',LoginAuth, CreditRequestController.GetCreditIntereset)
router.post('/update/:uuid',LoginAuth, CreditRequestController.UpdateCreditStatus)
router.post('/delete/:uuid',LoginAuth, CreditRequestController.DeleteDeclineLoan)
router.post('/approve/:uuid',LoginAuth, CreditRequestController.ListAprovedRequest)
module.exports= router