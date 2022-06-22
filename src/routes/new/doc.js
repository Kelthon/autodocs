const express = require("express");
const { isLogged } = require("../../middlewares/login");
const { tcc1 } = require("../../middlewares/tcc1");
const { google } = require("@googleapis/docs")

const router  = express.Router();

router.post('/new/doc/:id', isLogged, tcc1, (req, res) => {
    res.status(204).send();
})

module.exports = router;