const express = require("express");
const fs = require("fs");
const path = require("path");
const Request = require("../../models/requestModel");
const router = express.Router()

const date = require("../../utils/date");
const docFormAv = require("../../utils/formAvaliacao");
const docDecMember = require("../../utils/declaracaoMember");
const docDecOrientador = require("../../utils/declaracaoOrientador");

router.post("/api/view/pdfs", async(req, res) => {
    const { id } = req.body
    const docs = [];
    const request = await Request.findByPk(id);

    if(request === null) return res.json("Error not found").status(404);

    const filenames = [
        `${date("YYYY-MM-DD")}-${request.studentRegistration} Declaração do Segundo Membro da Banca.pdf`,
        `${date("YYYY-MM-DD")}-${request.studentRegistration} Formulário de Avaliação.pdf`,
        `${date("YYYY-MM-DD")}-${request.studentRegistration} Declaração do Orientador.pdf`,
        `${date("YYYY-MM-DD")}-${request.studentRegistration} Declaração do Membro da Banca.pdf` 
    ];

    docs.push(docFormAv(
        filenames[0],
        request.projectTitle,
        request.professorName,
        request.professorTitle,
        request.studentName,
        request.secondMemberName,
        request.secondMemberTitle,
        request.thirdMember,
        request.thirdMemberName,
        request.thirdMemberTitle,
        request.presentationRoom,
        request.presentationDate,
        request.presentationHour
    ));
    
    docs.push(docDecOrientador(
        filenames[1],
        request.projectTitle, 
        request.professorName, 
        request.studentName, 
        request.studentPeriod, 
        request.coordinatorName, 
        request.coordinatorSignature, 
        request.coordinatorSiape,
        request.jobTitle
    ));
        
    docs.push(docDecMember(
        filenames[2],
        request.projectTitle, 
        request.secondMemberName, 
        request.studentName,
        request.studentPeriod, 
        request.coordinatorName, 
        request.coordinatorSignature, 
        request.coordinatorSiape,
        request.jobTitle,
    ));
    
    if(request.thirdMember == 'true' || request.thirdMember == 'on') 
        docs.push(docDecMember(
            filenames[3],
            request.projectTitle, 
            request.thirdMemberName, 
            request.studentName,
            request.studentPeriod, 
            request.coordinatorName, 
            request.coordinatorSignature, 
            request.coordinatorSiape,
            request.jobTitle,
        ));


    res.sendFile(docs[0]);
    // fs.unlinkSync(docs[0]);
});

module.exports = router;