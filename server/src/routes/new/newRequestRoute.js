const express = require('express');
const sentMail = require('../../config/mailconf');
const Request = require('../../models/requestModel');
const router = express.Router();


router.post("/api/new/request", async (req, res) => {
    const {
        projectTitle, 
        studentName,
        studentRegistration,
        studentPeriod, 
        secondMemberName,
        secondMemberTitle,
        professorId,
        thirdMember,
        thirdMemberName,
        thirdMemberTitle,
        presentationRoom, 
        presentationDate, 
        presentationHour,
        type,
        description,
        active,
    } = req.body;

    const newRequest = Request.build({
        projectTitle: projectTitle,
        studentName: studentName,
        studentRegistration: studentRegistration,
        studentPeriod: studentPeriod,
        secondMemberName: secondMemberName,
        secondMemberTitle: secondMemberTitle,
        professorId: professorId,
        thirdMember: thirdMember,
        thirdMemberName: thirdMemberName,
        thirdMemberTitle: thirdMemberTitle,
        presentationRoom: presentationRoom,
        presentationDate: presentationDate,
        presentationHour: presentationHour,
        type: type,
        description: description,
        active: active
    })

    await newRequest.save().then(nreq => {
        // const mail = process.env.TARGET_USER || `engcivil.cct@ufca.edu.br`;
        const mail = process.env.TARGET_USER || `kelthonbalbino@gmail.com`;
        sentMail({
            from: `no-reply <autodocs.bot@gmail.com>`,
                to: mail,
                subject: "Novo Request de envio de documentos pelo Autodocs",
                text: `Olá,\nFoi cadastrado uma solicitação de documentos\nEste e-mail foi gerado automaticamente, por favor não o responda\nAtt,\nEquipe Autodocs`,
                html: `<p>Novo request cadastrado,\nFoi cadastrado uma solicitação de documentos\nEste e-mail foi gerado automaticamente, por favor não o responda\nAtt,\nEquipe Autodocs</p>`,
        }).then().catch();
        res.status(200).json({
            request: nreq
        });
    }).catch(err => {
        res.json({
            errors: err.message
        })
    });
});

module.exports = router