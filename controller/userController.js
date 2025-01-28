const {User} = require('../models')
const UserController = {
    async CreateUser (req,res) {
        const {firstname,lastname} = req.body;
        // try{
        //     const user = await User.create({firstname,lastname})
        //     // if(!firstName || !firstName){
        //     //     return res.status(201).json({message: 'Field must not be Empty'})
        //     // }
        //     return res.status(200).json({message:'Successfully Created', data:user})
        // }catch(err){
        //     return res.status(401).json({message:'not createds'})
        // }
        try{
            const user = await User.create({firstname,lastname})
            return res.json(user)
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = UserController;