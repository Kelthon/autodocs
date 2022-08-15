const fs = require("fs")
const nodemailer = require("nodemailer")

const Coordinator = require("../models/coordinatorModel");
const User = require("../models/userModel");
const docFormAv = require("../utils/formAvaliacao");
const docDecMember = require("../utils/declaracaoMember");
const docDecOrientador = require("../utils/declaracaoOrientador");
const date = require("../utils/date");

module.exports = {
    tcc1: async function (req, res, next) {
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
        
        await User.findByPk(professorId).then(user => {
            professorName = user.name;
            professorTitle = user.jobTitle;
            professorEmail = user.email;
        }).catch(err => {
            errors.push("An Error occorred to try find your user");
            console.log(err);
            return res.status(400).json({errors: errors})
        })
        
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
            docs.forEach(element => {
                if(fs.existsSync(element)) fs.unlinkSync(element)
            });
            return res.status(500).json({ errors: errors });
        } else {

            const transpoter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: true,
                auth: {
                    type: "OAuth2",
                    user: "",
                    accessToken: "",
                    clientId: "",
                    clientSecret: "",
                    refreshToken: "",
                    expires: "",
                },
            });

            await transpoter.sendMail({
                from: "autodocs@example.com",
                to: `kellth, <kellthgamer@gmail.com>`,
                subject: "solicitação de documentos",
                html: '<h1>Olá fulano!</h1><p>Segue anexado a este email os documentos gerados automaticamente pelo <a href="http://localhost:3000/">autodocs</a></p><strong>Não responda essa mesagem</strong>',
                attachment: { path: docs }
            }).catch(err => {
                errors.push("An Error occorred to try sent email")
                console.log(err)
                return res.status(500).json({errors: errors})
            }).finally(() => docs.forEach(element => fs.unlinkSync(element)));
        }
        next();
    }
}