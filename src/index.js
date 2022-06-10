const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const login = require("./routes/authentication/auth");
const tcc = require("./routes/new/doc/tcc");
const user = require("./routes/new/user");
const database = require("./database/index");

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "no secret",
    saveUninitialized: false,
    resave: false
}));

app.use(login);
app.use(user);
app.use(tcc);

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        msg: "Auto Docs"
    });
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})