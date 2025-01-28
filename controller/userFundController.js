const {UserFund,User} = require('../models')
const UserFundController = {
    async Userfund (req,res) {
        const {amount_contributed,date_contributed} = req.body
        try{
        const user_id = await User.findOne({where:{user_id:req.params.uuid}})
            if(!user_id){
                return res.status(201).json({message: 'uuid params not found'})
            }
            // return res.status(200).json({message:user_id})
            const data = await UserFund.create({user_id:req.params.uuid,amount_contributed,date_contributed})
            return res.json({message:'Success', data: data})
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = UserFundController;