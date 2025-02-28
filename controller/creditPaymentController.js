const { request } = require('express');
const {Credit_Payment,Credit_Request,Credit_Balance} = require('../models')
const creditPaymentController = {
    async CreateCreditPayment (req,res) {
        const {credit_payment_amount,credit_payment_date} = req.body;
        try{
            const creditId = await Credit_Balance.findOne({where:{user_id:req.params.uuid}})
            // console.log(creditId.user_id)
            const payment = await Credit_Payment.create({request_id:creditId.request_id,user_id:creditId.user_id,credit_payment_amount,credit_payment_date})
            creditId.balance =  creditId.balance-credit_payment_amount
            await creditId.save()
            return res.status(200).json({data:creditId})

        }catch(err){
            return res.status(401).json(err)
        }
        // try{
        //     const requestId = await Credit_Request.findOne({
        //         where: {
        //             request_id: req.params.uuid
        //         },
        //         attributes: ['request_id']
        //     });
        //     if(!requestId){
        //         return res.json({message: 'no Request ID found'})
        //     }else{
                
        //     const totalPayment = Number(requestId.request_amount) * Number(requestId.requested_amount_interest);
        //     const totalPaymentWithInterest = Number(requestId.request_amount) + totalPayment

        //     const payment = await Credit_Payment.create({request_id:req.params.uuid,credit_payment_amount,credit_payment_date})

        //     const totalPaid= await Credit_Payment.findAll({where:{request_id:req.params.uuid}})

        //     const total = totalPaid.reduce((add,payment)=>{
        //         return (add + payment.credit_payment_amount)
        //       },0)
              
        //     const remainingBalance  = totalPaymentWithInterest  - total

            

        //     const balance = await Credit_Balance.create({request_id:req.params.uuid,balance:remainingBalance,due_date:'2025-05-03'})

        //     // const currentBanace = await Credit_Balance.findOne({where:{request_id:req.params.uuid}})


        //     return res.json({data:payment})
        //     }
            
        // }catch(err){
        //     return res.status(201).json(err)
        // }
        try{

        }catch(err){
            return res.status(401).json(err)
        }
    },
    async ListPayment (req,res) {
        try{
            const list = await Credit_Payment.findAll({where:{user_id:req.params.uuid}})
            return res.status(200).json({data:list})
        }catch(err){
            res.status(401).json(err)
        }
    }
}
module.exports = creditPaymentController