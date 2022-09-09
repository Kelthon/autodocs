const nodemailer = require("nodemailer");
const googleOptions = require("./smooth-graph-354117-4b9803d45f81.json")

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: googleOptions.client_email,
        serviceClient: googleOptions.client_id,
        privateKey: googleOptions.private_key,
    },
});

module.exports = transporter; 