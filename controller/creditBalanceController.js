const {Credit_Balance,Credit_Payment,Credit_Request} = require('../models')

const CreditBalanceControler = {
    async CreateCreditBalance (req,res) {
        const {credit_payment_amount,credit_payment_date,due_date} = req.body;
        try{
            const credit_request = await Credit_Request.findOne({where:{fund_id:req.params.uuid}})
            const payment_Id = await Credit_Payment.findOne({where:{fund_id:req.params.uuid}})

            const request_amount =  credit_request.request_amount;
            const request_interest = credit_request.requested_amount_interest;

            console.log(payment_Id.credit_payment_amount)
            //request amount + interest of requested amount

            // const money_requested_interest = request_amount * request_interest;
            // console.log(money_requested_interest)

            // const check_balance = await Credit_Request.findAll()
            // console.log(money_requested_interest)
            
            
            // const lastIndex = (arr) => arr.length -1;
            // console.log(check_balance[lastIndex(check_balance)])
            // if(!check_balance){
            //     const create_credit_balance = await Credit_Balance.create({fund_id:req.params.uuid,credit_payment_amount,balance:32423,credit_payment_date,due_date});
            //     return res.status(200).json({message: 'Successfully Created', data:create_credit_balance})
            // }else{

            // }

            // if(credit_balance){
            //     const update_balance = await Credit_Balance.findOne({where:{fund_id:req.params.uuid}})
            //             update_balance.balance = money_requested_interest
            //              await update_balance.save()
            //              return res.json(update_balance)
            // }else{
               
            // }
           

            // console.log(request_amount + money_requested_interest)
            // if(!credit_request){
            //     return res.status(201).json({message:'Fund_id not found'})
            // }else{
            //     const payment_amount = await Credit_Balance.findOne({where:{fund_id:req.params.uuid}})
            //     // const create = {
            //     //     credit_payment_amount:req.body,
            //     //     balance:9000,
            //     //     credit_payment_date:req.body,
            //     //     due_date:req.body,
                    
            //     // }
            //     const create_credit_balance = await Credit_Balance.create({credit_payment_amount,credit_payment_date,due_date});
            //     return res.status(200).json({message: 'Successfully Created', data:create_credit_balance})
            // }
           
            // return res.json(credit_request)
            // const balanceCredit =  await Credit_Balance.create({fund_id:req.params.uuid,credit_payment,balance,credit_payment_date,due_date});
            // return res.status(200).json({message: 'Successfully Created', data:balanceCredit})
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = CreditBalanceControler;