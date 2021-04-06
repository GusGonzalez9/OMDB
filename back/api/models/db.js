const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://@localhost:5432/omdb2",

  { dialect: "postgres", logging: false }
);
module.exports = db;
