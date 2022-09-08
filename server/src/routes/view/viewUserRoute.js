const express = require("express");
const User = require("../../models/userModel");
const router = express.Router();

router.get('/api/user/:id', async (req, res) => {
    if(req.params.id) {
        const id = req.params.id;
        
        await User.findByPk(id).then(user => {
            return res.json(user ? user.name : null);
        });
    } else return res.json("Invalid id");
});

router.get('/api/typeuser/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    return res.json(user ? user.isAdmin : false);
});

module.exports = router;