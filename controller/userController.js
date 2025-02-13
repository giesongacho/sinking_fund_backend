const {User} = require('../models')
const {Op} = require('sequelize')
const UserController = {
    async CreateUser (req,res) {
        const {firstname,lastname} = req.body;
       //Checking if Firstname or lastname excess in database record
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
    }, 
  async GetUser (req,res) {
    try{
      const data = await User.findAll()
      return res.status(200).json({data:data})
    }catch(err){
      return res.status(201).json(err)
    }
  },
  async DeleteUser (req,res) {
    try{
      const deleteUser = await User.findOne({where:{user_id:req.params.uuid}});
      deleteUser.destroy()
      return res.status(200).json({message: 'Successfully Deleted'})
    }catch(err){
      return res.status(201).json(err)
    }
  }
}
module.exports = UserController;