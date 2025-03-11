const {Credit_Balance,Credit_Payment,Credit_Request,UserFund} = require('../models')

const CreditBalanceControler = {
    async CreateCreditBalance (req,res) {
        const {credit_payment_amount,credit_payment_date,due_date} = req.body;
        try{
            const credit_request = await Credit_Request.findOne({where:{fund_id:req.params.uuid}})
            const payment_Id = await Credit_Payment.findOne({where:{fund_id:req.params.uuid}})

            const request_amount =  credit_request.request_amount;
            const request_interest = credit_request.requested_amount_interest;

            console.log(payment_Id.credit_payment_amount)
            const balance = await Credit_Balance
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async GetBalance (req,res) {
        try{
            const balance = await Credit_Balance.findAll()
            return res.status(200).json({data:balance})
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async BalanceList (req,res) {
        try{
            const balance = await Credit_Balance.findAll({where:{user_id:req.params.uuid}})
            // const filterBalance = balance.filter((value)=> value.balance !== 0)
            // const mapping = filterBalance.map((value)=>{
            //     console.log(value.balance)
            // })
            // return mapping
            return res.status(201).json({data: balance})
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async AvailableFund (req,res) {
        try{
            const payment = await Credit_Payment.findAll()
            const contribution = await UserFund.findAll()
            const balance = await Credit_Balance.findAll()

            const PaymentCount =  payment.reduce((add,payment)=>{
                return add + payment.credit_payment_amount
            },0)
            const BalanceCount =  balance.reduce((add,balance)=>{
                return add + balance.balance
            },0)
            const FundCount =  contribution.reduce((add,fund)=>{
                return add + fund.amount_contributed
            },0)
            const available = PaymentCount + FundCount - BalanceCount;
            return res.status(200).json({data:available})
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = CreditBalanceControler;