require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notesecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    pass: process.env.MYSQL_PASSWORD || "mysql",
    daba: process.env.MYSQL_DB || "test_negocio",
  },
};
