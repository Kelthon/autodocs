const bodyParser = require("body-parser");
const express = require("express");
const moment = require("moment")
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

    // Formatação da Hora no padrão brasileiro com o moment

    function date() {
        moment.locale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "jan_fev_mar_mai_jun_ago_set_out_nov_dez".split("_"),
            monthsParseExact : true,
            weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
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
                sameDay : '[Aujourd’hui à] LT',
                nextDay : '[Demain à] LT',
                nextWeek : 'dddd [à] LT',
                lastDay : '[Hier à] LT',
                lastWeek : 'dddd [dernier à] LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : 'dans %s',
                past : 'il y a %s',
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
            dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
            ordinal : function (number) {
                return number + (number === 1 ? "er" : "e");
            },
            meridiemParse : /AM|PM/,
            isPM : function (input) {
                return input.charAt(0) === "M";
            },
            // In case the meridiem units are not separated around 12, then implement
            // this function (look at locale/id.js for an example).
            // meridiemHour : function (hour, meridiem) {
                //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
                // },
            meridiem : function (hours, minutes, isLower) {
                return hours < 12 ? "AM" : "PM";
            },
            week : {
                dow : 1, // Monday is the first day of the week.
                doy : 4  // Used to determine first week of the year.
            }
        });
        return "Juazeiro do Norte, " + moment().format("LL");
    }
    
    // Definição do modelo do documento usando o pdfkit

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
        .font("Times-Roman").text(`, referente ao período ${period}`)
        .moveDown().moveDown().moveDown()
        .text(`${date()}`, { align: "right" })
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