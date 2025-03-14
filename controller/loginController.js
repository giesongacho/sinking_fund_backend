const {Login} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {accessToken} = require('../config/accessToken')
const LoginController = {
    async LoginUser (req,res) {
        try{
            const {username,password} = req.body;
            const user = await Login.findOne({where:{username:username}})
            const isPasswordValid = await bcrypt.compare(password,user.password);
            if(username !== user.username){
                return res.status(401).json({message: 'Incorrect Username or Password',status: 'fail'})
            }else if(!isPasswordValid){
                return res.status(401).json({message: 'Incorrect Password',status: 'fail'})
            }else{
                const token = jwt.sign({id:user.id},'LONG-TOKEN', {subject: 'accessapi',expiresIn:'1h'})
                const {password:_, ...data} = user.dataValues
                res.cookie('authTokens', token, {
                    httpOnly: true,
                    // secure:false,
                    // sameSite:'strict',
                    // maxAge:3600000
                })
                    return res.status(200).json({
                        message: 'Login successfully',
                        data
                    })
            }
        }catch(err){
            res.status(401).json(err)
        }
    }
}
module.exports = LoginController;