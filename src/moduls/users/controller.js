const TABLA = "users";
const auth = require("../auth");
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

  async function add(body) {
    const user = {
      id: body.id,
      nombre: body.nombre,
      activo: body.activo,
    };

    const response = await db.add(TABLA, user);
    console.log("response", response);
    var insertId = 0;
    if (body.id == 0) {
      insertId = response.insertId;
    } else {
      insertId = body.id;
    }

    var responseTwo = "";
    if (body.usuario || body.password) {
      responseTwo = await auth.add({
        id: insertId,
        usuario: body.usuario,
        password: body.password,
      });
    }

    return responseTwo;
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
