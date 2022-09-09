const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

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

const port = 8080;
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(cors({ origin: 'https://www.autodocs.tk' }));

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

app.listen(port, () => { console.log(`serving on http://localhost:${port}/`) });