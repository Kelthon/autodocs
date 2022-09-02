const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

// Routes
const login = require("./routes/authentication/authRoute");
const newdocs = require("./routes/new/newDocRoute");
const newuser = require("./routes/new/newUserRoute");
const newrequest = require("./routes/new/newRequestRoute");
const viewrequest = require("./routes/view/viewRequestRoute");
const newcoordinator = require("./routes/new/newCoordinatorRoute");
const editCoordinator = require("./routes/edit/editCoordinatorRoute");
const User = require("./models/userModel");

const port = 8080;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "no secret",
    saveUninitialized: false,
    resave: false
}));

app.use(viewrequest)
app.use(login);
app.use(newuser);
app.use(newdocs);
app.use(newrequest);
app.use(newcoordinator);
app.use(editCoordinator);

app.get('/api', (req, res) => {
    res.status(204).send();
});

app.get('/api/user/:id', async (req, res) => {
    if(req.params.id) {
        const id = req.params.id;
        
        await User.findByPk(id).then(user => {
            res.json(user.name);
        });
        res.status(204).end();
    } else return res.json("Invalid id");
});

app.listen(port, () => {
    console.log(`serving on http://localhost:${port}/`);
});