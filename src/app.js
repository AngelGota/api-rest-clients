const express = require("express");
const config = require("./config.js");

const clients = require("./moduls/clients/routes.js");

const app = express();

// configuration
app.set("port", config.app.port);

// routes
app.use("/api/clients", clients);

module.exports = app;
