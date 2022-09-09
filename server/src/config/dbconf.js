module.exports = {
    dialect: "postgres",
    host: "kesavan.db.elephantsql.com" || process.env.DB_HOST, 
    username: "mkmbjxkp" || process.env.DB_USERNAME,
    password: "I8Iknx_IUoZPOarjxhgkIboe-CPHz16J" || process.env.DB_PASSWORD,
    database: "mkmbjxkp" || process.env.DB_DATABASE,
    define: {
        timestamps: true,
        underscored: true, 
    },
};