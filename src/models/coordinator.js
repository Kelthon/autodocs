const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Coordinator = sequelize.define("coordinator", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    siape: {
        type: DataTypes.STRING,
        allowNull: false
    },

    fullName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    signaturePath: {
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