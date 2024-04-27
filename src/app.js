const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config.js");

const clients = require("./moduls/clients/routes.js");
const users = require("./moduls/users/routes.js");
const auth = require("./moduls/auth/routes.js");
const error = require("./red/errors.js");

const app = express();

var corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuration
app.set("port", config.app.port);

// routes
app.use("/api/clients", clients);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use(error);

module.exports = app;
