const bodyParser = require("body-parser");
const express = require("express");
const pdf = require("pdfkit");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8080;
    
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.post('/new/doc/1/', (req, res) => {
    const { matricula, student, professor, title, period, coord, ass, siape } = req.body;

    const doc = new pdf({
        size: "A4",
        font: "Times-Roman",
    });
    
    doc.fontSize(12).lineGap(9)
        .font("Times-Bold").text(
            "DECLARAÇÃO", 
            { align: "center", }
        )
        .moveDown().moveDown()
        .font("Times-Roman").text(
            "Declaro para os devidos fins que ",
            { align: "justify", continued: true })
        .font("Times-Bold").text(`${professor}`, { continued: true })
        .font("Times-Roman").text(", participou na condição de membro da Banca Examinadora do Trabalho de Conclusão de Curso I, de Graduação em Engenharia Civil, do(a) discente ", { continued: true })
        .font("Times-Italic").text(`${student}`, { continued: true })
        .font("Times-Roman").text(", com título ", { continued: true })
        .font("Times-Bold").text(`${title}`, { continued: true })
        .font("Times-Roman").text(`, referente ao período ${period}`, { continued: true })
        .moveDown().moveDown().moveDown()
        .text("Juazeiro do Norte,", { align: "right" })
        .text(`${ass}`, { align: "center", })
        .text(`${coord}`, { align: "center", })
        .text(`Siape: ${siape}`, { align: "center", })

    doc.end();

    doc.pipe(fs.createWriteStream(`./declaracao-tcc-1-${matricula}.pdf`));
    doc.pipe(res);
    res.status(200).sendFile(`./declaracao-tcc-1-${matricula}.pdf`);
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})