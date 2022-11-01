const { Job } = require("kue");
const nodemailer = require("nodemailer");
const kue = require('kue')
 ,queue = kue.createQueue();

const mail = async function (mailOption) {
    var transporter = await nodemailer.createTransport({
        host: 'smpt.gmail.com',
        port: 587,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD 
        }
    });
    for (var i=0; i<10; i++){
       var Job = queue.create('email', {
        from: process.env.MAILER_USER,
        subject: mailOption.subject,
        to: mailOption.to,
        text: mailOption.text
    }).priority('high').attempts(5).save( function(err){
       if( !err ) console.log();
    });}
    
    
    setInterval(() => {
  Job.on('job enqueue', function(JobID){
        console.log( 'Job %s got queued of type %s', JobID);
    
    }).on('job complete', function(JobID,result){
    
        kue.Job.get(JobID, function(err,Job){
            if (err) return;
        });
    });
    Job.process('email', function(Job, done){
        console.log("Processing email: " + mailOption.JobID);
        email(mailOption.data.to, done);
    });
    
    function email(address,done)
    {
      done();
    }

try {
    var info = transporter.sendMail(mailOptions);
    console.log(info.response);
   return { status: 200, response: info.response };
} catch (e) {
    console.log(e);
    return { error: e, status: 500 };
};
}, 3000);
};


module.exports = mail;