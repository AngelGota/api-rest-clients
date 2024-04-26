const express = require("express");

const responses = require("../../red/responses.js");
const controller = require("./controller.js");

const router = express.Router();

router.get("/", function (req, res) {
  const all = controller.all().then((items) => {
    responses.success(req, res, items, 200);
  });
});

module.exports = router;
