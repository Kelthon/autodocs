const express = require("express");
const Request = require("../../models/requestModel");
const router = express.Router()

router.get("/api/view/requests", async(req, res) => {
    const requests = await Request.findAll();

    res.status(200).json(requests);
});

module.exports = router