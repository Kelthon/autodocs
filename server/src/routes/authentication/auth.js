const express = require("express");
const { isLogged } = require("../../middlewares/login");
const loginStatus = require("../../middlewares/login");
const User = require("../../models/user");
const { isSiape } = require("../../utils/validator");
const router = express.Router();

router.post("/api/login", loginStatus.isNotLogged, (req, res) => {
    const { account } = req.body;
    
    if(isSiape(account) == true) {
        const newuser = User.findOne({ where: { siape: account } }).then( user => {
            req.session.name = user.name;
            req.session.email = user.email;
            req.session.title = user.title;
            req.session.isLogged = true;

            res.status(200).json({ 
                user: newuser
            });
        }).catch(err => {
            res.status(404).json({ errors: err });
        })
    } else {
        res.status(400).json({ errors: "invalid siape"})
    }
});

router.get("/api/logout", loginStatus.isLogged, (req, res) => {
    req.session.isLogged = false;
    res.status(204).send();
});

module.exports = router;