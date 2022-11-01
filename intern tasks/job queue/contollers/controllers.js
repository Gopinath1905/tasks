const { Job } = require('kue');
const mail = require('../mail/mail')
const User = require('../user/models');
const {authSchema} = require('../validation/validation');
    
    exports.create = async (req, res) => {
        const {JobID, Email } = req.body;
        try {
          const user = await User.create({
            JobID,
            Email,
          });
      
          await sendEmailCreationEmail({ JobID, Email});
      
          res.json(user);
        } catch (error) {
          console.log(error);
          res.status(400).json(error);
        }
    }

    exports.sendmail = async(req,res) =>{
        try{
            const users = await User.find();
            users.forEach((users,index) =>{

            })
        }catch(error){ console.log(error);
            res.status(400).json(error);}
    }


    