const mysql = require("mysql");
const config = require("../config.js");

function all(table) {}

function one(table, id) {}

function add(table, data) {}

function deleted(table, id) {}

module.exports = {
  all,
  one,
  add,
  deleted,
};
