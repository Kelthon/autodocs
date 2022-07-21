const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const login = require("./routes/authentication/auth");
const docs = require("./routes/new/doc");
const user = require("./routes/new/user");
const database = require("./database/index");
const coordinator = require("./routes/new/coordinator");
const editCoordinator = require("./routes/edit/coordinator");

const port = 8080;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "no secret",
    saveUninitialized: false,
    resave: false
}));

app.use(login);
app.use(user);
app.use(docs);
app.use(coordinator);
app.use(editCoordinator);

app.get('/api', (req, res) => {
    res.status(204).send();
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})