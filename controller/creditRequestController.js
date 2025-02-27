const {Credit_Request,UserFund,User,Credit_Balance} = require('../models')
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
            const result = {

            }
            return res.status(200).json({data:data,message: 'error'})
        }
        catch(err){
            return res.status(201).json(err)
        }
    },
    async ListAprovedRequest (req,res) {
        try{
            const data = await Credit_Request.findAll({where:{user_id:req.params.uuid}})
            return res.status(200).json({data:data})
        }catch(err){
            return res.json(err)
        }
    },
    async UpdateCreditStatus (req,res) {
        try{
            const data = await Credit_Request.findOne({where:{request_id:req.params.uuid}})
            data.status = 1;
            await data.save()

            const dueDate = (reqDate,payTerms) => {
                const date = new Date(reqDate)
                date.setMonth(date.getMonth() + parseInt(payTerms, 10) / 2);
                const dateFormat = date.toISOString().split('T')[0];

                return dateFormat;
            }

                const requestDate = data.request_date;
                const dueDates = data.payment_terms

                const totalPayment = Number(data.request_amount) * Number(data.requested_amount_interest);
                const totalPaymentWithInterest = Number(data.request_amount) + totalPayment

                
                const balance = await Credit_Balance.create(
                    {
                        request_id:req.params.uuid,
                        user_id:data.user_id,
                        balance:totalPaymentWithInterest,
                        due_date:dueDate(requestDate,dueDates),
                        status:1
                    }
                )
                const totalLoanBalance = await Credit_Balance.findAll({where:{user_id:data.user_id}})

                const mergeBalance = totalLoanBalance.reduce((add,balances)=>{
                    return add + balances.balance
                },0)

                totalLoanBalance.balance = mergeBalance;
                await totalLoanBalance.save()

                console.log('merge',mergeBalance)

                return res.json({data:totalLoanBalance})

            
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