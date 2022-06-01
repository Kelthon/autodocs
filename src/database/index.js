const { Sequelize } = require("sequelize");
const db = require("../config/db");

const sequelize = new Sequelize(db);

try {
    sequelize.authenticate();
    console.log("DB was connected successfully!");
} catch {
    console.log("failure to connect DB!");
}

module.exports = sequelize;