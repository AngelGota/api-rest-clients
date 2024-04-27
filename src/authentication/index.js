const jwt = require("jsonwebtoken");
config = require("../config.js");

const secret = config.jwt.secret;

function asignationToken(data) {
  return jwt.sign(data, secret);
}

module.exports = {
  asignationToken,
};
