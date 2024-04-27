const db = require("../../DB/mysql.js");
const ctrl = require("./controller.js");

module.exports = ctrl(db);
