const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
        user: "9370779b26a30a", 
        pass: "97aa2ce61c1a8b", 
    },
    tls:{rejectUnauthorized:false}
});
module.exports= transporter;