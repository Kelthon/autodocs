const express = require("express");
const Request = require("../../models/requestModel");
const router = express.Router()

router.get("/api/view/requests", async(req, res) => {
    const requests = await Request.findAll();

    res.status(200).json(requests);
});


router.get("/api/view/request/:id", async(req, res) => {
    const id = req.params.id;
    const request = await Request.findByPk(id);

    res.status(200).json(request);
});


module.exports = router;