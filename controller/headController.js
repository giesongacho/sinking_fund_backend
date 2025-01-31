const {Heads} = require('../models')
const HeadController = {
    async CreateHead (req,res) {
        const {head_count,head_amount} = req.body;
        try{
            const createHeadAmout =  await Heads.create({user_id:req.params.uuid,head_count,head_amount});
            return res.status(200).json({message: 'Successfully Created', data:createHeadAmout})
        }catch(err){
            return res.status(401).json(err)
        }
    }
}

module.exports = HeadController