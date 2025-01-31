const {Credit_Balance,UserFund} = require('../models')

const CreditBalanceControler = {
    async CreateCreditBalance (req,res) {
        try{
            const fund_id = await UserFund.findOne({where:{fund_id:req.params.uuid}})
            const balanceCredit =  await Heads.create({fund_id:req.params.uuid,credit_payment,balance,credit_payment_date,due_date});
            return res.status(200).json({message: 'Successfully Created', data:balanceCredit})
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = CreditBalanceControler;