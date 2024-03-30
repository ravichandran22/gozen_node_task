const cron = require('node-cron');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example1@gamil.com',
        pass: '123456' 
    }
});


const sendEmail = () => {
    const mailOptions = {
        from: 'example1@gamil.com',
        to: 'example2@gamil.com',
        subject: 'Sample Email Notification',
        text: 'This is a sample email notification sent via Node.js Cron.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};


cron.schedule('* * * * *', () => {
    console.log('Running email sending task...');
    sendEmail();
});
