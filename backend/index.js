const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.get('/reservation', async (req,res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "marquisdebourgogne@gmail.com",
                pass: "tudb jzgv jmnz iwvd"
            }
        });

        let mailOptions = {
            from: "marquisdebourgogne@gmail.com",
            to: "nicolasplanche972@gmail.com",
            subject: `Demande de devis `,
            html:""

        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(402);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200);
            }
        });

        res.status(200).json('OK');
    }catch (e) {
        res.status(500).json('error' + e);
    }

})
app.get('',async (req,res) =>{
    console.log('ok');
})
app.listen(4000);