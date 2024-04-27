const express = require("express");

const responses = require("../../red/responses.js");
const controller = require("./index.js");

const router = express.Router();

router.get("/", all);
router.get("/:id", one);
router.post("/", add);
router.put("/", deleted);

async function all(req, res, next) {
  try {
    const items = await controller.all();
    responses.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}

async function one(req, res, next) {
  try {
    const items = await controller.one(req.params.id);
    responses.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    const items = await controller.add(req.body);
    if (req.body.id == 0) {
      message = "Registro nuevo ejecutado correctamente";
    } else {
      message = "Actualizacion ejecutada correctamente";
    }
    responses.success(req, res, message, 201);
  } catch (err) {
    next(err);
  }
}

async function deleted(req, res, next) {
  try {
    const items = await controller.deleted(req.body);
    responses.success(
      req,
      res,
      "Registro de cliente eliminado correctamente",
      200
    );
  } catch (err) {
    next(err);
  }
}

module.exports = router;
