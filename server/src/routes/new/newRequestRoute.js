const express = require('express');
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
        res.status(200).json({
            request: nreq
        });
    }).catch(err => {
        res.status(500).json({
            errors: err.message
        })
    });
});

module.exports = router