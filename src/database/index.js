const { Sequelize } = require("sequelize");
const db = require("../config/db");

const sequelize = new Sequelize(db);

module.exports = sequelize;