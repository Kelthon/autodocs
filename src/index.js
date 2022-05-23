const bodyParser = require("body-parser");
const express = require("express");
const moment = require("moment")
const pdf = require("pdfkit");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

// Formatação da Hora no padrão brasileiro com o moment

function date(format = "LL") {
    moment.locale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "jan_fev_mar_mai_jun_ago_set_out_nov_dez".split("_"),
        monthsParseExact : true,
        weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort : "domingo_segunda_terça_quarta_quinta_sexta_sábado".split("_"),
        weekdaysMin : "dom_seg_ter_qua_qui_sex_sáb".split("_"),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd[,] D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: '[em] dddd [às] LT',
            sameElse: 'L',
        },
        relativeTime : {
            future : 'Em %s',
            past : 'Há %s',
            s : 'alguns segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'un mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
    });
    return moment().format(format);
}

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.post('/new/doc/:id', (req, res) => {
    const { //form fields
            projectTitle, 
            professorName, 
            professorTitle, 
            studentName, 
            studentPeriod, 
            studentRegistration, 
            secondMemberName,
            secondMemberTitle,
            thirdMember,
            thirdMemberName,
            thirdMemberTitle,
            presentationRoom, 
            presentationDate, 
            presentationHour,
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle
    } = req.body;

    // Definição do modelo do documento usando o pdfkit
    const docPath = path.resolve(__dirname, "..", "public", "files", `declaracao-1-${studentRegistration}.pdf`);
    const avformPath = path.resolve(__dirname, "..", "public", "files", `formulario de avaliacao-${studentRegistration}.pdf`);
    const doc = new pdf({
        size: "A4",
        font: "Times-Roman",
    });

    doc.fontSize(12).lineGap(9)
        .image(path.resolve(__dirname, "..", "public", "img", "Brasão Vertical Preto.png"), 223, 72, {
            width: 150,
            align: "center",
        })
        .moveDown()
        .font("Times-Bold").text("DECLARAÇÃO", { align: "center", })
        .moveDown(2)
        .font("Times-Roman").text("Declaro para os devidos fins que ", { align: "justify", continued: true })
        .font("Times-Bold").text(`${professorName}`, { continued: true })
        .font("Times-Roman").text(", participou na condição de membro da Banca Examinadora do Trabalho de Conclusão de Curso I, de Graduação em Engenharia Civil, do(a) discente ", { continued: true })
        .font("Times-Italic").text(`${studentName}`, { continued: true })
        .font("Times-Roman").text(", com título ", { continued: true })
        .font("Times-Bold").text(`${projectTitle}`, { continued: true })
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
    
    const avform = new pdf({
        size: "A4",
        font: "Times-Roman",
    });
    
    const firstSignature =  (professorTitle + professorName + "(Orientador(a) e Pres. da Banca)").length;
    const secondSignature =  (secondMemberTitle + secondMemberName + "(2° membro examinador)").length;
    const thirdSignature =  ( thirdMemberTitle + thirdMemberName + "(3° membro examinador)").length;
    avform.fontSize(12)
        .image(path.resolve(__dirname, "..", "public", "img", "UFCA+CCT CH (2).png"), 42, 58, {
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
        .image(path.resolve(__dirname, "..", "public", "img", "table_av.png"), {
            width: 450
        })
        .font("Times-Bold").text("Observações: _____________________________________________________________________________________________________________________________________________________________________________________________________________________", { align: "justify" })
        .font("Times-Bold").text("Resultado final(nota):________________________________________________________", { align: "justify", continued: true })
        .moveDown()
        .text("Assinaturas:")
        .text("_________________________________________")
        .lineGap(9).font("Times-Bold").text(`${professorTitle} ${professorName} `, { align: "justify", continued: true })
        .font("Times-Roman").text("(Orientador(a) e Pres. da Banca)", {continued: false})
        .lineGap(3).text("_________________________________________")
        .lineGap(9).font("Times-Bold").text(`${secondMemberTitle} ${secondMemberName} `, { align: "justify", continued: true })
        .font("Times-Roman").text("(2° membro examinador)",)
        .image(path.resolve(__dirname, "..", "public", "img", "ondas.png"), 0, 800, {
            width: 1000,
            align: "center"
        })
    avform.end();

    avform.pipe(fs.createWriteStream(avformPath));
    
    res.status(200).sendFile(avformPath);
    // res.status(200).sendFile(docPath);
    // doc.pipe(res)
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})