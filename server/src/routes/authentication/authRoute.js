const express = require("express");
const User = require("../../models/userModel");
const { isSiape } = require("../../utils/validator");
const router = express.Router();

router.post("/api/login", async (req, res) => {
    const { account } = req.body;
    
    if(isSiape(account) == true) {
        const newuser = await User.findOne({ where: { siape: account } }).then( user => {
            req.session.isLogged = true;
            
            res.status(200).json({ 
                user: user
            });
        }).catch(err => {
            res.status(404).json({ errors: err.message });
        })
    } else {
        res.status(400).json({ errors: "invalid siape"})
    }
});

router.get("/api/logout", (req, res) => {
    req.session.isLogged = false;
    res.status(204).send();
});

module.exports = router;