const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://postgres:gustihero@localhost:5433/omdb2",

  { dialect: "postgres", logging: false }
);
module.exports = db;
