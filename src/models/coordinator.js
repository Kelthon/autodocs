const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Coordinator = sequelize.define("coordinator", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    coordinator: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    viceCoordinator: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    coordinatorSignaturePath: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },

    viceCoordinatorSignaturePath: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },

    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tablename: "Coordinators"
})

module.exports = Coordinator;