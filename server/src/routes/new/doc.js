const express = require("express");
const { tcc1 } = require("../../middlewares/tcc1");

const router  = express.Router();

router.post('/api/new/doc/', tcc1, (req, res) => {
    res.status(204).send();
})

module.exports = router;