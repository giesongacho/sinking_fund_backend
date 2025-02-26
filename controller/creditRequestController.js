const {Credit_Request,UserFund,User} = require('../models')
const CreditRequestController = {
    async CreateCreditRequest (req,res) {
        const {request_amount,requested_amount_interest,payment_terms,request_date} = req.body
        try{
            const userFundId = await User.findOne({where:{user_id:req.params.uuid}})
            // return res.json(userFundId)
             if(!userFundId){
                return res.status(201).json({message: 'User id not found'})
             }
             else{
                const requestCredit =  await Credit_Request.create({user_id:req.params.uuid,request_amount,requested_amount_interest,payment_terms,request_date});
                return res.status(200).json({message: 'Successfully Created', data:requestCredit})
             }
            
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async ListCreditRequest (req,res) {
        try{
            const data = await User.findAll({
                include: [{
                    model: Credit_Request,
                    as: 'credit',
                    attributes: ['request_amount','requested_amount_interest','payment_terms', 'request_date','status', 'request_id']
                }],
                attributes: ['user_id', 'firstname', 'lastname']
            })

            return res.status(200).json({data:data,message: 'error'})
        }
        catch(err){
            return res.status(201).json(err)
        }
    },
    async UpdateCreditStatus (req,res) {
        try{
            const data = await Credit_Request.findOne({where:{request_id:req.params.uuid}})
            data.status = 1;
            await data.save()

            return res.json({data:data})
        }catch(err){
            return res.status(401).json(err)
        }
    },
    async DeleteDeclineLoan (req,res) {
       try{
        const data = await Credit_Request.findOne({where:{request_id:req.params.uuid}});
        await data.destroy()

        return res.status(200).json({data:data})
        
       }catch(err){
        return res.status(401).json(err)
       }
    }
}
module.exports = CreditRequestController