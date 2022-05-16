const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.post('/new/tcc/1/', (req, res) => {
    const { title, student, professor } = req.body;
    res.status(200).json({
        title: title,
        student: student,
        professor: professor,
    });
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})