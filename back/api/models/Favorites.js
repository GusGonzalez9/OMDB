const S = require("sequelize");
const db = require("./db");
class Favorites extends S.Model {}

Favorites.init(
  {
    Title: {
      type: S.STRING,
    },
    Poster: {
      type: S.STRING,
      allowNull:true
    },
    Type:{
      type: S.STRING
    },
    Year:{
      type: S.INTEGER
    },
    imdbID : {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorites;
