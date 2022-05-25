const fs = require("fs");
const path = require("path");
const pdf = require("pdfkit");
const date = require("./date");

// Caminhos para as pastas public e files
const publicFolder = path.join(__dirname, "../..", "public");
const filesFolder = path.join(publicFolder, "files");

// Formatação da Hora no padrão brasileiro com o moment

function formAvaliacao (
    filename = "",                  // nome do arquivo            
    projectTitle="",                // título do projeto
    professorName,                  // nome do professor orientador 
    professorTitle,                 // título do professor orientador    
    studentName,                    // nome do estudante que defenderá o tcc
    secondMemberName,               // membro da banca
    secondMemberTitle = "Dr(a).",   // título do membro da banca 
    thirdMember,                    // booleana que representa a participação do membro opcional
    thirdMemberName,                // membro opcional da banca
    thirdMemberTitle = "Dr(a).",    // título do membro opcional  
    presentationRoom,               // sala de apresentação    
    presentationDate,               // data da defesa 
    presentationHour,               // hora da defesa
) {
    const docPath = path.join(filesFolder, filename);
    const doc = new pdf({
        size: "A4",
        font: "Times-Roman",
    });
    
    doc.fontSize(12)
        .image(path.join(publicFolder, "img", "UFCA+CCT CH (2).png"), 42, 58, {
            width: 288
        })
        .moveDown(4)

        .font("Times-Bold").text("FORMULÁRIO DE AVALIAÇÃO", { align: "center", underline:true})
        .fontSize(10).font("Times-Bold").text("PROJETO DE GRADUAÇÃO I", { align: "center", underline:true})
        
        .moveDown(2)
        
        .fontSize(12).font("Times-Bold").text(`Título: "${projectTitle.toUpperCase()}"`, { align: "justify"})
        .moveDown()
        
        .font("Times-Bold").text("Orientando (a): ", {continued: true})
        .font("Times-Roman").text(`${studentName}`)
        .font("Times-Bold").text("Orientador (a): ", {continued: true})
        .font("Times-Roman").text(`${professorName}`)
        .font("Times-Bold").text("Atividade: ", {continued: true})
        .font("Times-Roman").text("Projeto de Graduação")
        .font("Times-Bold").text("Local: ", {continued: true})
        .font("Times-Roman").text("Juazeiro do Norte ", {continued: true})
        .font("Times-Roman").text(`(${presentationRoom})`)
        .font("Times-Bold").text("Data: ", { continued: true })
        .font("Times-Roman").text(`(${presentationDate}) `, { continued: true })
        .font("Times-Bold").text("Hora: ", {continued: true})
        .font("Times-Roman").text(`(${presentationHour})`)
        
        .moveDown()
        
        .font("Times-Bold").text("Tabela de avaliação (0 a 1 ponto para cada item, com apenas um algarismo significatico)", {continued: true})
        
        .moveDown()
        
        .image(path.join(publicFolder, "img", "table_av.png"), {
            width: 450
        })
        
        .font("Times-Bold").text("Observações: _____________________________________________________________________________________________________________________________________________________________________________________________________________________", { align: "justify" })
        .font("Times-Bold").text("Resultado final(nota):________________________________________________________", { align: "justify", continued: true })
        
        .moveDown()
        
        .text("Assinaturas:")
        .font("Times-Roman").text("_________________________________________", { align: "center" })
        
        .lineGap(9).text(`${professorTitle} ${professorName} (Orientador(a) e Pres. da Banca)`, { align: "center" })
        .lineGap(3).text("_________________________________________", { align: "center" })
        .lineGap(9).text(`${secondMemberTitle} ${secondMemberName} (2° membro examinador)`, { align: "center" })
        
        if(thirdMember) {
            doc.lineGap(3).text("_________________________________________", { align: "center" })
            doc.text(`${thirdMemberTitle} ${thirdMemberName} (3° membro examinador)`, { align: "center" })
        }
        
        doc.image(path.join(publicFolder, "img", "ondas.png"), 0, 800, {
            width: 1000,
            align: "center"
        })
    doc.end();

    doc.pipe(fs.createWriteStream(docPath));
    
    return docPath;
}

function declarationOrientador (
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

function declarationMember (
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
        .font("Times-Roman").text(", participou na condição de membro examinador da Banca Examinadora do Trabalho de Conclusão de Curso I, de Graduação em Engenharia Civil, do(a) discente ", { continued: true }) 
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

module.exports = {
    publicFolder,
    filesFolder,
    date,
    declarationOrientador,
    declarationMember,
    formAvaliacao,
}