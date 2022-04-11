
const nodemailer = require('nodemailer');

const mail = {
    usuario: 'serdev333@gmail.com',
    pass:'qydteg-2cezsy-vitwuS'

}
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    tls:{
        rejectUnauthorized:false
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });
const sendEmail=async(email,subject,html)=>{
try {
    await transporter.sendMail({
        from: `zarando<${mail.usuario}>`, // sender address
        to: email, // list of receivers
        subject, // Subject line
        text: "hola amigo suscribete a la tienda", // plain text body
        html, // html body
      });
} catch (error) {
    console.log('algo no va bien con el email',error);
}

}
  // send mail with defined transport object
 const getTemplate =(name,token)=>{
     `
     <head>
     <link rel="stylesheet" href="./style.css">
 </head>
 
 <div id="email___content">
     <img src="https://i.imgur.com/eboNR82.png" alt="">
     <h2>Hola ${ name }</h2>
     <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
     <a
         href="http://localhost:4000/api/user/confirm/${ token }"
         target="_blank"
     >Confirmar Cuenta</a>
 </div>
     `
 }

 module.exports={
     sendEmail,getTemplate
 }