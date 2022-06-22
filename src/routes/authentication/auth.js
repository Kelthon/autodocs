const express = require("express");
const { isLogged } = require("../../middlewares/login");
const loginStatus = require("../../middlewares/login");
const User = require("../../models/user");
const { isSiape } = require("../../utils/validator");
const router = express.Router();

router.post("/login", loginStatus.isNotLogged, (req, res) => {
    const { account } = req.body;
    
    if(isSiape(account) == true) {
        let msg, stat;
        User.findOne({ where: { siape: account }}).then( user => {
           req.session.name = user.name;
           req.session.email = user.email;
           req.session.title = user.title;
           req.session.isLogged = true;
           stat = 200;
           msg = "You was logged in!";
        }).catch((err) => {
            console.log(err)
            stat = 404;
            msg = "User not found!";
        }).finally(() => {
            res.status(stat).json({
                message: msg
            })
        })
    } else {
        res.status(400).json({
            message: "Invalid Siape"
        })
    }
});

router.get("/logout", loginStatus.isLogged, (req, res) => {
    req.session.isLogged = false;
    res.status(204).send();
});

module.exports = router;