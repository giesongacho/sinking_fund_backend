const {User,UserFund} = require('../models')
const {Op} = require('sequelize')
const UserController = {
    async CreateUser (req,res) {
        const {firstname,lastname,head_count,head_amount} = req.body;
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
          if(firstname && lastname){
            const insertUser = await User.create({firstname,lastname,head_count,head_amount})
            return res.status(200).json({data:insertUser,message:'Successfully Created'})
          }else{
            return res.status(201).json({message:'Firstname or Lastname already excess, use different Firstname or Lastname'})
          }
        }catch(err){
            return res.status(401).json(err)
        }
    }, 
  async GetUser (req,res) {
    try{
      const data = await User.findAll()
      //   const data = await User.findAll({
      //   include: [{
      //     model: UserFund,
      //     as: 'user_fund',
      //     attributes: ['fund_id', 'amount_contributed', 'date_contributed'],
      //     required: false
      //   }],
      //   attributes: ['user_id','firstname','lastname','status']
      // });

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