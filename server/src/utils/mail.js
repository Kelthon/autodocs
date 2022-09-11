require("dotenv");

const mail = (name, email, subject, message, attachments) => {
    options = {
        from: `NOREPLY@Autodocs <${process.env.CLIENT_USER}>`,
        to: `${name} <${email}>`,
        subject: subject,
        text: message,
        html: mailFormatHtml(message),
        attachment: attachments
    }
    return options;
}

const mailFormatHtml = (title, message) => {
    const mailTitle = title ? `<h1>${title}</h1>` : "";
    const html = `${mailTitle}<p>${message}</p>`;
    return html; 
}

module.exports = {
    mail: mail,
    mailFormatHtml: mailFormatHtml
}