const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Request = sequelize.define("request", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    projectTitle: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    studentName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
    studentRegistration: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
    studentPeriod: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
    secondMemberName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    secondMemberTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 

    thirdMember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    
    thirdMemberName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    thirdMemberTitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    presentationRoom: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    presentationDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    presentationHour: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 

    professorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: "Requests"
});

module.exports = Request;