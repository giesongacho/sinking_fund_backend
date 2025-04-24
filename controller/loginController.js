const {Login} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {accessToken} = require('../config/accessToken')
const transporter = require('../config/nodeMailer')
const LoginController = {
    async LoginUser (req,res) {
        try{
            const {username,password} = req.body;
            const user = await Login.findOne({where:{username:username}})
            const isPasswordValid = await bcrypt.compare(password,user.password);

            if(!username || !(await bcrypt.compare(password,user.password))){
                return res.status(401).json({message: 'Username or Password Incorrect',success:false})
            }else{
                const token = jwt.sign({id:user.id},'LONG-TOKEN', {subject: 'accessapi',expiresIn:'3600000'})
                    const {password:_, ...data} = user.dataValues
                    res.cookie('authTokens', token, {
                        httpOnly: true,
                        secure:true,
                        sameSite:'strict',
                        maxAge:3600000 
                    })
                    // const mailOption = {
                    //     to: "akiratakishig@gmail.com",
                    //     subject: "hello this message from giesongacho gmail",
                    //     text: "this is for testing from giesongacho1@gmail to akiratakishig@gmail"
                    // }
                    // // await transporter.sendMail(mailOption)

                        return res.status(200).json({
                            message: 'Login successfully',
                            user:'Admin',
                            success:true,
                        })
            }
        }catch(err){
            res.status(401).json(err)
        }
    },
    async LogoutUser (req,res) {
        res.clearCookie(authTokens)
        return res.status(401).json({status:'Success'})
    },
    async CheckAuth (req,res) {
        const token = req.cookies.authTokens; // your cookie name
       
        jwt.verify(token,'LONG-TOKEN', (err) => {
          if (err) {
            // Token is expired or invalid
            console.log('token expired')
            return res.status(401).json({ message: 'Token expired or invalid' });
          }
          console.log('token valid')
          // Token is valid
          return res.status(200).json({
            message: 'Token is valid',
          });
        });
    }
}
module.exports = LoginController;