const express = require("express");
const fs = require("fs");

const { 
    filesFolder,
    publicFolder,
    formAvaliacao, 
    declarationMember,
    declarationOrientador
} = require("../../../middlewares/docs");

const router  = express.Router();

router.post('/new/doc/:id', (req, res) => {
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
        docs.push(avaliacao);
    } catch (err) {
        console.log(err)
        errors.push("Falha ao criar formulário de avaliação");
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
        docs.push(declaracaoDoOrientador);
    } catch (err) {
        console.log(err)
        errors.push("Falha ao criar declaração do Orientador");
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
        docs.push(declaracaoDoSegundoMembro);
    } catch (err) {
        console.log(err)
        errors.push("Falha ao criar declaração do segundo membro");
    }

    if(thirdMember == true) {
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
            docs.push(declaracaoDoTerceiroMembro);
        } catch (err) {
        console.log(err)
            errors.push("Falha ao criar declaração do terceiro membro");
        }
    }
 
    if(errors.length > 0) {
        docs.forEach(element => {
            fs.unlinkSync(element);
        });

        res.status(500).json({
            errors: errors
        });
    }

    res.status(200).json({
        paths: docs
    });
})

module.exports = router;