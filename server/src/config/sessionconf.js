const session = require("express-session");

const appSession = session({
    secret: "no secret" || process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false
});

module.exports = appSession;