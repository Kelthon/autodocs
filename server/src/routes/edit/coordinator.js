const Coordinator = require("../../models/coordinator");
const express = require("express");
const User = require("../../models/user");
const router = express.Router();

router.post("/api/edit/coordinator", async (req, res) => {
    const { id, signPath, vice, viceSignPath, active } = req.body;
    const coord = await Coordinator.findByPk(parseInt(id));
    
    // is not created
    if(coord == null) {
        const newCoord = await Coordinator.build({
            coordinator: id,
            coordinatorSignaturePath: signPath,
            viceCoordinator: vice,
            viceCoordinatorSignaturePath: viceSignPath,
            active: active
        }).then(async nc => {
            await nc.save().then(n => {
                res.status(200).json({coordinator: n});
            }).catch(err => res.status(400).json({errors: err.message}));
        }).catch(err => res.status(400).json({errors: err.message}));
    }
    // else 
    coord.coordinator = id;
    coord.coordinatorSignaturePath = signPath;
    coord.viceCoordinator = vice;
    coord.viceCoordinatorSignaturePath = viceSignPath;
    coord.active = active;

    await coord.save().then(c => {
        res.status(200).json({coordinator: coord});
    }).catch(err => res.status(400).json({errors: err.message}))
    
});

module.exports = router;