const bcrypt = require("bcrypt");
const authentication = require("../../authentication");
const TABLA = "auth";

module.exports = function (dbinject) {
  let db = dbinject;

  if (!db) {
    db = require("../../DB/mysql.js");
  }

  async function login(usuario, password) {
    const data = await db.query(TABLA, { usuario: usuario });

    return bcrypt.compare(password, data.password).then((result) => {
      if (result === true) {
        return authentication.asignationToken({ ...data });
      } else {
        throw new Error("Informacion Invalida");
      }
    });
  }

  async function add(data) {
    console.log("data", data);
    const authData = {
      id: data.id,
    };

    if (data.usuario) {
      authData.usuario = data.usuario;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password.toString(), 5);
    }
    return db.add(TABLA, authData);
  }

  return {
    add,
    login,
  };
};
