const Favorites = require("./Favorites")
const User =  require("./User")


Favorites.belongsTo(User) 

module.exports = {Favorites,User}

// 
