const express = require('express')
const router = express.Router()
const CreditRequestController = require('../controller/creditRequestController')

router.post('/create/:uuid',CreditRequestController.CreateCreditRequest)
router.get('/list', CreditRequestController.ListCreditRequest)
router.post('/update/:uuid', CreditRequestController.UpdateCreditStatus)
router.post('/delete/:uuid', CreditRequestController.DeleteDeclineLoan)
module.exports= router