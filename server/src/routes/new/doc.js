const express = require("express");
const { isLogged } = require("../../middlewares/login");
const { tcc1 } = require("../../middlewares/tcc1");

const router  = express.Router();

router.post('/api/new/doc/:id', isLogged, tcc1, (req, res) => {
    res.status(204).send();
})

module.exports = router;