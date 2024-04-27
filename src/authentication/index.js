const jwt = require("jsonwebtoken");
config = require("../config.js");
const error = require("../middleware/errors.js");

const secret = config.jwt.secret;

function asignationToken(data) {
  return jwt.sign(data, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

const checkAuth = {
  confirmToken: function (req, id) {
    const decodify = decodifyHeader(req);
    if (decodify.id !== id) {
      throw error("No tienes permisos necesarios para esta accion.", 401);
    }
  },
};

function obtainToken(authorization) {
  if (!authorization) {
    throw error("No viene token.", 401);
  }

  if (authorization.indexOf("Bearer") === -1) {
    throw error("Formato invalido.", 401);
  }

  let token = authorization.replace("Bearer ", "");
  return token;
}

function decodifyHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = obtainToken(authorization);
  const decodify = verifyToken(token);

  req.user = decodify;

  return decodify;
}

module.exports = {
  asignationToken,
  checkAuth,
};
