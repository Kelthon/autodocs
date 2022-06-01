const bodyParser = require("body-parser");
const express = require("express");
const tcc = require("./routes/new/doc/tcc");
const database = require("./database/index");
const user = require("./routes/new/user");

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(user);
app.use(tcc);

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})