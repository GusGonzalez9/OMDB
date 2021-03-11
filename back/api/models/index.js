const Favorites = require("./Favorites");
const User = require("./User");
const db = require("./db");

Favorites.belongsTo(User);
User.hasMany(Favorites);

module.exports = { db: db, Favorites, User };

//
