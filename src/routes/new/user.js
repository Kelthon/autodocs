const express = require("express");
const { validateFields } = require("../../utils/validator");
const loginStatus = require("../../middlewares/login");
const User = require("../../models/user");
const router = express.Router();

router.post("/new/user", loginStatus.isNotLogged, (req, res) => {
    let msg;
    let stat;
    let result;
    
    const { username, usersiape, usermail, usertitle } = req.body;
    
    let validate = validateFields({
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
                stat = 200;
                msg = "User was created successfully!";
                result = newuser;
                req.session.name = newuser.name;
                req.session.email = newuser.email;
                req.session.title = newuser.title;
                req.session.isLogged = true;
            } catch(err) {
                stat = 500;
                msg = "Error to save new User";
                console.log(msg + "\n" + err);
            }
        } catch(err) {  
            stat = 500;
            msg = "Error to build new User";
            console.log(msg + "\n" + err);
        
        }
    } else {
        msg = validate.errors;
        stat = 500;
    }

    res.status(stat).json({
        message: msg,
        content: result
    });
})

module.exports = router