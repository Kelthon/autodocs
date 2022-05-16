const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Auto Docs");
})

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
})