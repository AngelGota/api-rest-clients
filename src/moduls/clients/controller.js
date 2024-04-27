const TABLA = "clients";
module.exports = function (dbinject) {
  let db = dbinject;

  if (!db) {
    db = require("../../DB/mysql.js");
  }

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

  return {
    all,
    one,
    deleted,
    add,
  };
};
