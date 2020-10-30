const Sequelize = require("sequelize")
const db = new Sequelize("postgres://postgres:gustihero@localhost:5433/omdb")
module.exports =  db 
