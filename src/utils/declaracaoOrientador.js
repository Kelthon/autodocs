const fs = require("fs");
const path = require("path");
const pdf = require("pdfkit");
const date = require("../utils/date");

const publicFolder = path.join(__dirname, "../..", "public");
const filesFolder = path.join(publicFolder, "files");

module.exports = function declarationOrientador (
    filename,
    projectTitle, 
    professorName, 
    studentName, 
    studentPeriod, 
    coordinatorName, 
    coordinatorSignature, 
    coordinatorSiape,
    jobTitle,
) {
    const docPath = path.join(filesFolder, filename);
    const doc = new pdf({
        size: "A4",
        font: "Times-Roman",
    });

    doc.fontSize(12).lineGap(9)
        .image(path.join(publicFolder, "img", "Brasão Vertical Preto.png"), 223, 72, {
            width: 150,
            align: "center",
        })
        .moveDown()
        
        .font("Times-Bold").text("DECLARAÇÃO", { align: "center", })
        
        .moveDown(2)
        
        .font("Times-Roman").text("Declaro para os devidos fins que ", { align: "justify", continued: true })
        .font("Times-Bold").text(`${professorName} `, { continued: true })
        .font("Times-Roman").text("participou na condição de membro presidente da Banca Examinadora do Trabalho de Conclusão de Curso I, de Graduação em Engenharia Civil, do(a) discente ", { continued: true })
        .font("Times-Italic").text(`${studentName} `, { continued: true })
        .font("Times-Roman").text(", com título ", { continued: true })
        .font("Times-Bold").text(`${projectTitle} `, { continued: true })
        
        .font("Times-Roman").text(`, referente ao período ${studentPeriod}`)
        
        .moveDown(3)
        
        .text(`Juazeiro do Norte, ${date()}`, { align: "right" })
        .moveDown(2)
        
        .lineGap(0).text(`${coordinatorSignature}`, { align: "center", })
        
        .text(`${coordinatorName}`, { align: "center", })
        .text(`${jobTitle} do Curso de Engenharia Civil`, { align: "center", })
        .text(`SIAPE: ${coordinatorSiape}`, { align: "center", })
    doc.end();
    
    doc.pipe(fs.createWriteStream(docPath));
    
    return docPath;
}
