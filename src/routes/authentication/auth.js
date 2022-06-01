const router = require("express").Router();
const user = require("../models/user");

router.use();

router.post("/login", (req, res) => {
    let msg;
    let stat;
    const siape = req.body.siape;
    
    if(user.findOne({siape: siape}) == null) {
        stat = 404
        msg = "User not found!";
    }

    res.status(stat).json({
        message: msg
    });
});