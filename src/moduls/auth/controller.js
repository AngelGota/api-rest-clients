const TABLA = "auth";
module.exports = function (dbinject) {
  let db = dbinject;

  if (!db) {
    db = require("../../DB/mysql.js");
  }

  function add(data) {
    const authData = {
      id: data.id,
    };

    if (data.usuario) {
      authData.usuario = data.usuario;
    }

    if (data.password) {
      authData.password = data.password;
    }
    return db.add(TABLA, authData);
  }

  return {
    add,
  };
};
