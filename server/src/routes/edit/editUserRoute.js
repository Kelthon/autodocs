const express = require("express");
const User = require("../../models/userModel");
const router = express.Router();

router.post("/api/edit/typeuser/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const isAdmin = req.body.isAdmin == "true" ? true : false;

    const admin = await User.findByPk(id)
    admin.isAdmin = isAdmin;
    
    admin.save().then(user => {
        return res.json(user);
    }).catch(err => {
        return res.json({errors: err.message});
    });

    if(admin === null) return res.status(404).json({errors: "Not found"});
});

router.post("/api/edit/user/:id", async (req, res) => {
    const id = req.params.id;
    const { username, usersiape, usermail, usertitle } = req.body;


    await User.findByPk(id).then(user => {
        if(user == null) return res.json({errors: "Not found"});
        if(username) user.name = username;
        if(usersiape) user.siape = usersiape;
        if(usermail) user.email = usermail;
        if(usertitle) user.title = usertitle;

        user.save().then(updated => { return res.json(updated); }).catch(err => {
            return res.json({errors: err.message});
        });
    });

    res.json({errors: "Not found"});
});

module.exports = router;