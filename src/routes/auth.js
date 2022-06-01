const router = require("express").Router();
const user = require("../models/user");

router.use();

router.post("/login", (req, res) => {
    const siape = req.body.siape;
    const msg = [];
    if( user.findOne({siape: siape}) == null) errors.push("Usuário não encontrado!");

    res.status(200).json({
        message: msg
    });
});