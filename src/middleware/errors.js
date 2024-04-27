function error(message, codigo) {
  let e = new Error(message);
  if (codigo) {
    e.statusCode = codigo;
  }

  return e;
}

module.exports = error;
