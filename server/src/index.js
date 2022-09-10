const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
require("dotenv/config");

const session = require("./config/sessionconf");
// Routes
const login = require("./routes/authentication/authRoute");
const newdocs = require("./routes/new/newDocRoute");
const newuser = require("./routes/new/newUserRoute");
const newrequest = require("./routes/new/newRequestRoute");
const newcoordinator = require("./routes/new/newCoordinatorRoute");
const viewpdfs = require("./routes/view/viewPDFsRoute");
const viewuser = require("./routes/view/viewUserRoute");
const viewrequest = require("./routes/view/viewRequestRoute");
const editCoordinator = require("./routes/edit/editCoordinatorRoute");
const editUser = require("./routes/edit/editUserRoute");

const port = process.env.PORT;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session);

app.use(newuser);
app.use(newdocs);
app.use(newrequest);
app.use(newcoordinator);

app.use(editCoordinator);
app.use(editUser);

// app.use(viewpdfs);
app.use(viewrequest);
app.use(viewuser);

app.use(login);

app.listen(port, () => { console.log(`autodocs: serving on http://localhost:${port}/`) });

module.exports=app;