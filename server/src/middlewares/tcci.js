const fs = require("fs");
const transporter = require("../config/mailconf");
const Coordinator = require("../models/coordinatorModel");
const User = require("../models/userModel");
const docFormAv = require("../utils/formAvaliacao");
const docDecMember = require("../utils/declaracaoMember");
const docDecOrientador = require("../utils/declaracaoOrientador");
const date = require("../utils/date");

module.exports = {
    tcci: async function (req, res, next) {
        const 
        {
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
        } = req.body;
        
        const errors = [], 
                docs = []; 
        let coordinatorName,
            coordinatorSignature,
            coordinatorSiape,
            jobTitle,
            professorName,
            professorTitle,
            professorEmail,
            searchFor;

        await Coordinator.findByPk(1).then(async coord => {
            if(coord.active) {
                jobTitle = "Coordenador"; 
                searchFor = coord.coordinator;
            } else {
                jobTitle = "Vicecoordenador";
                searchFor = coord.viceCoordinator;
            }
            
            await User.findByPk(searchFor).then(user => {
                coordinatorName = user.name;
                coordinatorSignature = coord.coordinatorSignaturePath; 
                coordinatorSiape = user.siape;
            }).catch(err => {
                errors.push("An Error occorred to try find user coordinator");
                console.log(err);
            });
        }).catch(err => {
            errors.push("An Error occorred to try find coordinator");
            console.log(err);
        });     

        professorId ? await User.findByPk(professorId).then(user => {
            professorName = user.name;
            professorTitle = user.jobTitle;
            professorEmail = user.email;
        }).catch(err => {
            errors.push("An Error occorred to try find your user");
            console.log(err);
            return res.status(400).json({errors: errors});
        }) : errors.push("Login fail");
        
        const filenames = [
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Segundo Membro da Banca.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Formulário de Avaliação.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Orientador.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Membro da Banca.pdf` 
        ];
                
        try {
            docs.push(docFormAv(
                filenames[0],
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
                presentationHour
            ));
            
            docs.push(docDecOrientador(
                filenames[1],
                projectTitle, 
                professorName, 
                studentName, 
                studentPeriod, 
                coordinatorName, 
                coordinatorSignature, 
                coordinatorSiape,
                jobTitle
            ));
                
            docs.push(docDecMember(
                filenames[2],
                projectTitle, 
                secondMemberName, 
                studentName,
                studentPeriod, 
                coordinatorName, 
                coordinatorSignature, 
                coordinatorSiape,
                jobTitle,
            ));
            
            if(thirdMember == 'true' || thirdMember == 'on') 
                docs.push(docDecMember(
                    filenames[3],
                    projectTitle, 
                    thirdMemberName, 
                    studentName,
                    studentPeriod, 
                    coordinatorName, 
                    coordinatorSignature, 
                    coordinatorSiape,
                    jobTitle,
                ));
        } catch(err) {
            console.log(err);
            errors.push("An Error occorred to try create files");
        }

        if(errors.length > 0) {
            docs.forEach(element => { if(fs.existsSync(element)) fs.unlinkSync(element) });
            return res.status(500).json({ errors: errors });
        } else {

            const attachments = [];

            for(let i = 0 ; i < docs.length; i++) {
                attachments.push({
                    filename: filenames[i],
                    path: docs[i],
                    contentType: 'application/pdf'
                });
            }

            const mailOptions = {
                from: "Autodocs <kelthon2018@hotmail.com>",
                to: `Kelthon, <kelthonbalbino@gmail.com>`,
                subject: "solicitação de documentos",
                html: '<h1>Olá fulano!</h1><p>Segue anexado a este email os documentos gerados automaticamente pelo <a href="http://localhost:3000/">autodocs</a></p><strong>Não responda essa mesagem</strong>',
                attachment: attachments
            }

            try {
                transporter.sendMail(mailOptions, function (err, info) {
                    docs.forEach(element => fs.unlinkSync(element));
                    if(err) console.log(err);
                });
            } catch(err) {
                console.log(err);
            }
                
            next();
        }
    }
}