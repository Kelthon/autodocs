const express = require("express");
const fs = require("fs");
const path = require("path");
const { tcci } = require("../../middlewares/tcci");

const router  = express.Router();

router.get('/api/new/doc/', tcci, async (req, res) => {
    const dir = path.join(__dirname, "..", "..", "public", "files");
    fs.readdir(dir, (err, files) => {
        files.forEach(file => fs.unlink(file, err => {
            console.log(`autodocs: removed '${file}'`)
        }));
    })
    res.status(204).send();
})

module.exports = router;