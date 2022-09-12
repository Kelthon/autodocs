require("dotenv/config");

module.exports = {
    dialect: "postgres",
<<<<<<< HEAD
    host: "postgres", 
    username: "autodocs",
    password: "I8Iknx_IUoZPOarjxhgkIboe-CPHz16J",
    database: "autodocs",
=======
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
>>>>>>> release/patch
    define: {
        timestamps: true,
        underscored: true, 
    },
};