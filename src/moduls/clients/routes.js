const express = require("express");

const responses = require("../../red/responses.js");

const router = express.Router();

router.get("/", function (req, res) {
  responses.success(req, res, "Respuestas y ejecucion correcta", 200);
});

module.exports = router;
