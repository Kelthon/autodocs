const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define("user", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    siape: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 

    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

}, {
    tableName: "Users"
});

module.exports = User;