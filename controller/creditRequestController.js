const {Credit_Request,UserFund,User} = require('../models')
const CreditRequestController = {
    async CreateCreditRequest (req,res) {
        const {request_amount,requested_amount_interest,payment_terms,request_date} = req.body
        try{
            const userFundId = await UserFund.findOne({where:{fund_id:req.params.uuid}})
             if(!userFundId){
                return res.status(201).json({message: 'Fund id not found'})
             }
             else{
                const requestCredit =  await Credit_Request.create({fund_id:req.params.uuid,request_amount,requested_amount_interest,payment_terms,request_date});
                return res.status(200).json({message: 'Successfully Created', data:requestCredit})
             }
            
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async ListCreditRequest (req,res) {
        try{
            const data = await Credit_Request.findAll()
            return res.status(200).json({data:data})
        }
        catch(err){
            return res.status(201).json(err)
        }
    },
}
module.exports = CreditRequestController