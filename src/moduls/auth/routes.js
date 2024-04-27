const express = require("express");

const responses = require("../../red/responses.js");
const controller = require("./index.js");

const router = express.Router();

router.get("/login", login);

async function login(req, res, next) {
  try {
    const items = await controller.login(req.body.usuario, req.body.password);
    responses.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
