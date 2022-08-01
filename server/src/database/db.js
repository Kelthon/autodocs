const { Sequelize } = require("sequelize");
const db = require("../config/dbconf");

const sequelize = new Sequelize(db);

try {
    sequelize.authenticate();
    console.log("DB was connected successfully!");

    try {
        sequelize.sync({ force: false });
        console.log("All models were synchronized successfully.");
    } catch(err) {
        console.log("failure to sync models to DB!\n" + err);
    }

} catch(err) {
    console.log("failure to connect DB!\n" + err);
}

module.exports = sequelize;