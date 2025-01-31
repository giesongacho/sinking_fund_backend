const express = require('express')
const router = express.Router()
const CreditRequestController = require('../controller/creditRequestController')

router.post('/create/:uuid',CreditRequestController.CreateCreditRequest)
router.get('/list', CreditRequestController.ListCreditRequest)
module.exports= router