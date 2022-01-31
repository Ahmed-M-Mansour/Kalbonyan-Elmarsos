const sgMail = require('@sendgrid/mail') ; 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email , name)=>{
    sgMail.send({
        to: email , 
        from: 'ahmedmmansour18@gmail.com' , 
        subject:'Thanks for joining in' , 
        text: `Hi ${name}. we are so happy to connect with you` 
    })
}

const sendLastEmail = async (email , name)=>{
    sgMail.send({
        to: email , 
        from: 'ahmedmmansour18@gmail.com' , 
        subject:`Good Bye ${name}` , 
        text: `Hi ${name}. we want to know if you are have any problem with out website. Thanks for your time` ,
    })
}

const sendWhenCreateTask = async (email , name)=>{
    sgMail.send({
        to: email , 
        from: 'ahmedmmansour18@gmail.com' , 
        subject:`Good Job ${name}!` , 
        text: `Hi ${name}. You just create a new Task Kepp Going ` ,
    })
}

module.exports = {
    sendWelcomeEmail , 
    sendLastEmail ,
    sendWhenCreateTask
}