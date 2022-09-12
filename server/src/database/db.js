const { Sequelize } = require("sequelize");
const db = require("../config/dbconf");

const sequelize = new Sequelize(db);

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log(`autodocs: DB (${db.database}) was connected successfully!`);

        try {
            sequelize.sync({ force: false });
            console.log("autodocs: All models were synchronized successfully.");
        } catch(err) {
            console.log("autodocs: failure to sync models to DB!\n" + err);
        }

    } catch(err) {
        console.log("autodocs: failure to connect DB!\n" + err);
    }
}

connect();

module.exports = sequelize;