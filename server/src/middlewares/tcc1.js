const Coordinator = require("../models/coordinator");
const User = require("../models/user");
const docFormAv = require("../utils/formAvaliacao");
const docDecMember = require("../utils/declaracaoMember");
const docDecOrientador = require("../utils/declaracaoOrientador");
const date = require("../utils/date");

module.exports = {
    tcc1: function (req, res, next) {
        const {
            projectTitle, 
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
            jobTitle,
        } = req.body;

        if(!req.session.name || !req.session.title || !req.session.email) {
            console.log(req.session)
            return res.status(400).json({
                message: "Invalid session"
            });
        }

        const   professorName = req.body.name, 
                professorTitle = req.body.title, 
                professorEmail = req.session.email;
        
        const errors = [], docs = [];
        const coordinator = Coordinator.findOne({ where: { id: 1 } });
        const userCoordinator = User.findOne({ where: { id: coordinator.coordinator } });
        const coordinatorSignature = coordinator.coordinatorSignaturePath; 
        const coordinatorSiape = userCoordinator.siape;
        const filenames = [
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Segundo Membro da Banca.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Formulário de Avaliação.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Orientador.pdf`,
            `${date("YYYY-MM-DD")}-${studentRegistration} Declaração do Membro da Banca.pdf` 
        ];

        docFormAv(
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
        );

        docDecOrientador(
            filenames[1],
            projectTitle, 
            professorName, 
            studentName, 
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle
        );

        docDecMember(
            filenames[2],
            projectTitle, 
            professorName, 
            studentName,
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle,
        );

        if(thirdMember == 'true') docDecMember(
            filenames[3],
            projectTitle, 
            professorName, 
            studentName,
            studentPeriod, 
            coordinatorName, 
            coordinatorSignature, 
            coordinatorSiape,
            jobTitle,
        );

        if(errors.length > 0) {
            docs.forEach(element => fs.unlinkSync(element));
            return res.status(500).json({ errors: errors });
        } else next();
    }
}