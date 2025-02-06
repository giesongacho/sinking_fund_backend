const { request } = require('express');
const {Credit_Payment,Credit_Request,Credit_Balance} = require('../models')
const creditPaymentController = {
    async CreateCreditPayment (req,res) {
        const {credit_payment_amount,credit_payment_date} = req.body;
        try{
            const requestId = await Credit_Request.findOne({where:{request_id:req.params.uuid}})
            const totalPayment = await Credit_Payment.findAll({where:{request_id:req.params.uuid}})
            const payment = await Credit_Payment.create({request_id:req.params.uuid,credit_payment_amount,credit_payment_date})
            if(!requestId){
                return res.json({message: 'no Request ID found'})
            }else{
              const total = totalPayment.reduce((add,payment)=>{
                return (add + payment.credit_payment_amount)
              },0)
              console.log('requested amount',requestId.request_amount)
                // const payment_Id = await Credit_Payment.findOne({where:{fund_id:req.params.uuid}})

                

                // const updated = await Credit_Balance.findOne({where:{request_id:req.params.uuid}})
                // updated.balance = requestId.request_amount - total;
                // updated.due_date = updated.due_date
                // await updated.save()
                // return res.json({data:payment})
                // const balance = await Credit_Balance.create({request_id:req.params.uuid,balance:requestId.request_amount - total,due_date:'2025-05-03'})
                console.log( total)
                return res.json({data:payment})
             
            }
            
        }catch(err){
            return res.status(201).json(err)
        }
    }
}
module.exports = creditPaymentController