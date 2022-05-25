const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const fs = require("fs");

const { 
    date,
    filesFolder,
    publicFolder,
    formAvaliacao, 
    declarationMember,
    declarationOrientador
} = require("./middlewares/docs")

const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.post('/new/doc/:id', (req, res) => {
    const {
        projectTitle, 
        professorName, 
        professorTitle, 
        studentName,
        studentRegistration,
        studentPeriod, 
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
        jobTitle,
    } = req.body;
    try {
        const avaliacao = formAvaliacao( 
            `/Avaliação ${studentRegistration} TCC I.pdf`,
            projectTitle, 
            professorName, 
            professorTitle, 
            studentName,
            secondMemberName,
            secondMemberTitle,
            thirdMember,
            thirdMemberName,
            thirdMemberTitle,
            presentationRoom, 
            presentationDate, 
            presentationHour,
        );
    } catch {

    }

    try {
        const declaracaoDoOrientador = declarationOrientador(
            `/Declaração Orientador TCC I ${studentRegistration}.pdf`,
            projectTitle, 
            professorName, 
            studentName, 
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle,
            true
        );  
    } catch {

    }
    try {
        const declaracaoDoSegundoMembro = declarationMember(
            `/Declaração do Segundo Membro da Banca TCC I ${studentRegistration}.pdf`,
            projectTitle, 
            professorName, 
            studentName,
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle,
            false
        );
    } catch {
        
    }
    try {
        const declaracaoDoTerceiroMembro = declarationMember(
            `/Declaração do Terceiro Membro da Banca TCC I ${studentRegistration}.pdf`,
            projectTitle, 
            professorName, 
            studentName,
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle,
            false
        )
    } catch {

    }
        
    res.status(200).send("Docs generateds")
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})