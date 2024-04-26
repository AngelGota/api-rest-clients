const db = require("../../DB/mysql.js");

const TABLA = "clients";

function all() {
  return db.all(TABLA);
}

function one(id) {
  return db.one(TABLA, id);
}

function add(body) {
  return db.add(TABLA, body);
}

function deleted(body) {
  return db.deleted(TABLA, body);
}

module.exports = {
  all,
  one,
  deleted,
  add,
};
