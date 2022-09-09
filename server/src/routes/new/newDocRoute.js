const express = require("express");
const { tcci } = require("../../middlewares/tcci");

const router  = express.Router();

router.post('/api/new/doc/', tcci, (req, res) => {
    res.status(204).send();
})

module.exports = router;