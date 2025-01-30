const {User} = require('../models')
const {Op} = require('sequelize')
const UserController = {
    async CreateUser (req,res) {
        const {firstname,lastname} = req.body;
       
        try{
            const checkUser = await User.findOne({
                where:{
                    [Op.or]: [
                      {firstname:firstname},
                      {lastname:lastname}
                    ]
                }
            })
          if(!checkUser){
            const insertUser = await User.create({firstname,lastname})
            return res.status(200).json({data:insertUser,message:'Successfully Created',status:true})
          }else{
            return res.status(201).json({message:'Firstname or Lastname already excess, use different Firstname or Lastname',status:false})
          }
        }catch(err){
            return res.status(401).json(err)
        }
    }
}
module.exports = UserController;