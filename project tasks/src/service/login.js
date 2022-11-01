const Login = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userSchema } = require('../validation/valid');
const mailservice = require('../mail/mailservice');
const multer = require('multer');
const path = require('path');


exports.signup = async(payload) => {
    console.log(payload)
    try{
        const result = await userSchema.validateAsync(payload)
        console.log(result)
        try{
            const validate = await Login.query().findOne({email:payload.email})
            if(!validate){
              const name = payload.userName
                const email = payload.email
                const DOB = payload.DOB
                const hash_password = await bcrypt.hash(payload.userPassword, 10);
                // console.log(hash_password)
                const user = await Login.query().insert([{userName:name,email:email,DOB:DOB,userPassword:hash_password}]);
                // console.log(user)
                const mail = await mailservice.userMail(payload);
                console.log(mail)
                return user
                
            }
            else return "User Already in use"
            }
            catch (err) {
                console.log(err)
               throw err  
            }  
        }
        catch (err) {
            console.log(err)
            
           return err || "validation error"
        }
}

exports.login = async(payload) => {
    try{
    const user = await Login.query().findOne({email:payload.email})
    console.log(user)
        try{
             const compare =await bcrypt.compare(payload.userPassword,user.userPassword)
             console.log(compare)
             const token = jwt.sign({ name: user.name, email: user.email }, 
                'my_secret_key',
                { expiresIn: '5min' })
    
                return token
        }
        catch(err){
            return err
        }
    }
    catch(err){
        return err
    }
}

exports.getUser = async(payload) =>{
    {
        User.findOne({email:payload.email})
            .then(coupon => {
                res.send(coupon);
            }).catch(error => {
                res.status(401).send({
                    message: error.message || "some error occurred while retrieving coupon details"
                });
                return User
            });
}
}
