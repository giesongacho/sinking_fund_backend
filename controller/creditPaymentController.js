const {Credit_Payment,Credit_Request,Credit_Balance} = require('../models')
const creditPaymentController = {
    async CreateCreditPayment (req,res) {
        const {credit_payment_amount,credit_payment_date} = req.body;
        const idRequested = req.params.uuid
        try{
            const payment = await Credit_Payment.create({request_id:idRequested,credit_payment_amount,credit_payment_date})
            if(payment){
                const balance = await Credit_Balance.create({request_id:idRequested,balance:232,due_date:'2025-05-03'})
                return res.json({data:payment})
            }
        }catch(err){
            return res.status(201).json(err)
        }
    }
}
module.exports = creditPaymentController