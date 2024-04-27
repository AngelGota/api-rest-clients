const express = require("express");
const morgan = require("morgan");
const config = require("./config.js");

const clients = require("./moduls/clients/routes.js");
const users = require("./moduls/users/routes.js");
const error = require("./red/errors.js");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuration
app.set("port", config.app.port);

// routes
app.use("/api/clients", clients);
app.use("/api/users", users);
app.use(error);

module.exports = app;
