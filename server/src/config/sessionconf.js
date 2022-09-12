const session = require("express-session");
require("dotenv/config");

const appSession = session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false
});

module.exports = appSession;