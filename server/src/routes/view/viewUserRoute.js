const express = require("express");
const User = require("../../models/userModel");
const Coordinator = require("../../models/coordinatorModel");
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

router.get("/api/view/coordinator", async(req, res) => {
    const coordinator = await Coordinator.findByPk(1);
    res.json(coordinator);
});

router.get("/api/view/coordinator/active", async(req, res) => {
    let active;
    const coordinator = await Coordinator.findByPk(1);

    if(coordinator.active) {
        active = {
            coordinator: coordinator.coordinator,
            signaturePath: coordinator.coordinatorSignaturePath
        };
    } else {
        active = {
            coordinator: coordinator.viceCoordinator,
            signaturePath: coordinator.viceCoordinatorSignaturePath
        };
    }
    res.json(active);
});

module.exports = router;