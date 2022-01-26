require("dotenv").config();
const nodemailer = require("nodemailer");
const filePath = require("fs/promises");

(async function sendMailFunction() {
    await console.log("Sending Report Over Mail");

    const transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user:process.env.MAIL_USER_EMAIL,
            pass:process.env.MAIL_USER_PASSWORD
        },
    })

    await transporter.sendMail({
        from:process.env.MAIL_FROM,
        to:process.env.MAIL_TO,
        subject: "Daily Report",
        text: "Please find daily report",
        html: "<b>Hello world?</b>",
        attachments: [filePath.readFile('./Results/wdio-0-0-json-reporter.log')]
    });
})()
