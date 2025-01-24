const {User} = require('../models')
const UserController = {
    async CreateUser (req,res) {
        const {firstname,lastname,status} = req.body;
        try{
            const user = await User.create({firstname,firstname,status})
            // if(!firstName || !firstName){
            //     return res.status(201).json({message: 'Field must not be Empty'})
            // }
            return res.status(200).json({message:'Successfully Created', user})
        }catch(err){
            return res.status(201).json({message:'not created', err})
        }
    }
}
module.exports = UserController;