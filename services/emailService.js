const nodeMailer = require('nodemailer');

async function sendMail({ from, to, subject, text, html}) {
    let transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let info = await transporter.sendMail ({
        //in JS when key and value are same then we can write only one but here i am writing both
            from: `inshare <${from}>`,
            to : to,
            subject: subject,
            text: text,
            html: html
    });
}


module.exports = sendMail;