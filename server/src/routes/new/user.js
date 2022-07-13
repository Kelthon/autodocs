const express = require("express");
const { validateFields } = require("../../utils/validator");
const loginStatus = require("../../middlewares/login");
const User = require("../../models/user");
const router = express.Router();

router.post("/api/new/user", loginStatus.isNotLogged, (req, res) => {
    const { username, usersiape, usermail, usertitle } = req.body;
    
    const validate = validateFields({
        emailslist: usermail,
        nameslist: username,
        siapeslist: usersiape,
        abbrevslist: usertitle,
    })
    
    if(validate.isValid) {
        const newuser = User.build({
            name: username,
            siape: usersiape,
            email: usermail,
            title: usertitle,
        });

        try {
            try {
                newuser.save();
                req.session.name = newuser.name;
                req.session.email = newuser.email;
                req.session.title = newuser.title;
                req.session.isLogged = true;

                res.status(200).json({ user: newuser });
            } catch(err) {
                res.status(500).json({
                    errors: err
                });
                console.log("Error to save new User\n" + err);
            }
        } catch(err) { 
            res.status(500).json({
                errors: err
            });
            console.log("Error to build new User\n" + err);
        }
    } else {
        res.status(200).json({
            errors: validate.errors
         });
    }
})

module.exports = router