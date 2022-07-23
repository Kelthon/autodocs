const Coordinator = require("../../models/coordinatorModel")
const express = require("express");
const router = express.Router();
const validator = require("../../utils/validator")

router.post("/api/new/coordinator", (req, res) => {
    const { coord, signPath, vice, viceSignPath, active } = req.body;
    const validate = validator.validateCoordinator(coord, signPath, vice, viceSignPath, active);
    
    if(validate.isValid) {
        const newCoord = Coordinator.build({
            coordinator: coord,
            viceCoordinator: vice,
            coordinatorSignaturePath: signPath,
            viceCoordinatorSignaturePath: viceSignPath,
            active: active == "true" ? true : 
                    active == "false" ? false :
                    active == "on"? true : 
                    active == "checked"? true : false 
        })
        newCoord.save().then(() => {
            res.status(200).json({ coordinators: newCoord });

        }).catch(err => {
            res.status(500).json({ errors: err});
            console.log("Error to save coordinator");
        })
    } else {
        res.status(400).json({ errors: validate.errors });
    }
});

module.exports = router;