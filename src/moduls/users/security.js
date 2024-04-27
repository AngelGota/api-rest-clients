const authentication = require("../../authentication");

module.exports = function checkAuth() {
  function middleware(req, res, next) {
    const id = req.body.id;
    authentication.checkAuth.confirmToken(req, id);
    next();
  }
  return middleware;
};
