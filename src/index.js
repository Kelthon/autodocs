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
    
    const errors = [];
    const docs = [];

    try {
        const avaliacao = formAvaliacao( avaliacao,
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
        docs.append(avaliacao);
    } catch {
        errors.append("Falha ao criar formulário de avaliação");
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
        docs.append(declaracaoDoOrientador);
    } catch {
        errors.append("Falha ao criar declaração do Orientador");
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
        docs.append(declaracaoDoSegundoMembro);
    } catch {
        errors.append("Falha ao criar declaração do segundo membro");
    }

    if(thirdMember) {
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
            );
            docs.append(declaracaoDoTerceiroMembro);
        } catch {
            errors.append("Falha ao criar declaração do terceiro membro");
        }
    }

        
    if(errors.length > 0) {
        docs.forEach(element => {
            fs.unlinkSync(element);
        });

        res.status(500).json({
            errors: errors
        })
    }

    res.status(200).json({
        paths: docs
    })
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})