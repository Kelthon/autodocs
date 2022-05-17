const bodyParser = require("body-parser");
const express = require("express");
const pdf = require("pdfkit");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.post('/new/doc/1/', (req, res) => {
    const { title, student, professor } = req.body;

    const doc = new pdf();

    doc.text(title);
    doc.text(student);
    doc.text(professor);

    doc.end();

    doc.pipe(fs.createWriteStream("./file.pdf"));
    doc.pipe(res);
    res.status(200).sendFile("./file.pdf");
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})