const router = require("express").Router();
const user = require("../../models/user");

router.post("/new/user", (req, res) => {
    const { username, usersiape, usermail, usertitle } = req.body;
    console.log(username);
    const stat = 200;
    const msg = "";

    const newuser = user.build({
        name: username,
        siape: usersiape,
        email: usermail,
        title: usertitle,
    });

    try {
        newuser.save();
        stat = 200;
        msg = "Usuário criado com sucesso!"
    } catch {
        stat = 500;
        console.log("Error ao salvar novo usuário");
        msg = "Error ao salvar novo usuário";
    }

    res.status(stat).json({
        message: msg
    });
})

module.exports = router