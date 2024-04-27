const mysql = require("mysql");
const config = require("../config.js");

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.pass,
  database: config.mysql.daba,
};

let conection;

function conMysql() {
  conection = mysql.createConnection(dbconfig);
  conection.connect((err) => {
    if (err) {
      console.log("[db err]", err);
      setTimeout(conMysql, 200);
    } else {
      console.log("Conexion a base de datos");
    }
  });

  conection.on("error", (err) => {
    console.log("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      conMysql();
    } else {
      throw err;
    }
  });
}

conMysql();

function all(table) {
  return new Promise((resolve, reject) => {
    conection.query(`SELECT * FROM ${table}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function one(table, id) {
  return new Promise((resolve, reject) => {
    conection.query(
      `SELECT * FROM ${table} WHERE ID=${id}`,
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
}

function add(table, data) {
  return new Promise((resolve, reject) => {
    conection.query(
      `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`,
      [data, data],
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
}

function deleted(table, data) {
  return new Promise((resolve, reject) => {
    conection.query(
      `DELETE FROM ${table} WHERE ID=?`,
      data.id,
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
}

module.exports = {
  all,
  one,
  add,
  deleted,
};
