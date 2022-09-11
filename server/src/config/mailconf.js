const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv");

const oAuthClient = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuthClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN});

const sentMail = async (mail) => {
    try {
        const accessToken = await oAuthClient.getAccessToken();
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: process.env.CLIENT_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
           },
        });
        
        const result = await transporter.sendMail(mail)
        return result;
    } catch(err) {
        return err;
    }
}

module.exports = sentMail;