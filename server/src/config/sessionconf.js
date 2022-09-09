const session = require("express-session");

const appSession = session({
    secret: "no secret",
    saveUninitialized: false,
    resave: false
});

module.exports = appSession;