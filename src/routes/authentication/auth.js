const express = require("express");
const loginStatus = require("../../middlewares/login");
const User = require("../../models/user");
const { isSiape } = require("../../utils/validator");
const router = express.Router();

router.post("/login", loginStatus.isNotLogged, (req, res) => {
    let stat, msg;
    const { account } = req.body;
    console.log(req.originalUrl, req.url)

    console.log(req.body, account, isSiape(account));
    
    if(isSiape(account) == true) {
        try {
            const user = User.findOne({ where: { siape: account }});
            req.session.isLogged = true;
            stat = 200;
            msg = "You was logged in!";
        } catch(err) {
            stat = 404;
            msg = "User not found!";
        }
    } else {
        stat = 404;
        msg = "Invalid Siape";
    }
        res.status(stat).json({
            message: msg
    })
});

router.get("/logout", loginStatus.isLogged, (req, res) => {
    req.session.isLogged = false;
    res.status(204).send();
});

module.exports = router;