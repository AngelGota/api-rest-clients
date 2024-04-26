const db = require("../../DB/mysql.js");

const TABLA = "clients";

function all() {
  return db.all(TABLA);
}

module.exports = {
  all,
};
