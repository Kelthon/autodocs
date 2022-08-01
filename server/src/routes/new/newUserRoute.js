const express = require("express");
const { validateFields } = require("../../utils/validator");
const User = require("../../models/userModel");
const router = express.Router();

router.post("/api/new/user", async (req, res) => {
    const { username, usersiape, usermail, usertitle } = req.body;
    
    const validate = validateFields({
        emailslist: usermail,
        nameslist: username,
        siapeslist: usersiape,
        abbrevslist: usertitle,
    })
    
    if(validate.isValid) {
        try {    
            const newuser = User.build({
                    name: username,
                    siape: usersiape,
                    email: usermail,
                    title: usertitle,
                })

                await newuser.save().then(() => {
                    res.status(200).json({ user: newuser });
                }).catch(err => {
                    let error = [];
                    error.push("Error to save new User: " + err.message);
                    error.push("possibly this user already exists");
                    res.status(500).json({ errors: error});
                });

        } catch(err) {
            res.status(500).json({ errors: "Error to build new User: " + err.message });
        };
    } else {
        res.status(200).json({ errors: validate.errors });
    }
})

module.exports = router