require("dotenv/config");

const mail = (name, email, subject, message, attachments) => {
    const mail = process.env.CLIENT_USER || "autodocs.bot@gmail.com"
    const options = {
        from: `no-reply <${mail}>`,
        to: `${name} <${email}>`,
        subject: subject,
        text: message,
        html: `<p>${message}</p>`,
        attachment: attachments
    }
    return options;
}

module.exports = mail;