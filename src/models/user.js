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
        allowNull: false
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    siape: {
        type: DataTypes.STRING,
        allowNull: false
    }, 

    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

}, {
    tableName: "Users"
});

module.exports = User;