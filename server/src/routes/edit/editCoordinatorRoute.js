const express = require("express");
const Coordinator = require("../../models/coordinatorModel");
const User = require("../../models/userModel");
const router = express.Router();

router.post("/api/edit/coordinator", async (req, res) => {
    const { id, signPath, vice, viceSignPath, active } = req.body;
    const coord = await Coordinator.findByPk(parseInt(id));
    
    // is not created
    if(coord === null) {
        const newCoord = Coordinator.build({
            coordinator: id,
            coordinatorSignaturePath: signPath,
            viceCoordinator: vice,
            viceCoordinatorSignaturePath: viceSignPath,
            active: active
        });

        await newCoord.save().then(newC => {
            return res.status(200).json({coordinator: newC});
        }).catch(err => { return res.status(400).json({errors: err.message}) });

    }
    else {
        coord.oordinator = id;
        coord.coordinatorSignaturePath = signPath;
        coord.viceCoordinator = vice;
        coord.viceCoordinatorSignaturePath = viceSignPath;
        coord.active = active;

        await coord.save().then(c => {
            return res.status(200).json({coordinator: coord});
        }).catch(err => { return res.status(400).json({errors: err.message}) });}
    
});

module.exports = router;