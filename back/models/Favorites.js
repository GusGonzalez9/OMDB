const S = require("sequelize");
const db = require("../db")
class Favorites extends S.Model {
}

Favorites.init({
    title : {
        type:S.STRING
    },
    poster : {
        type : S.STRING
    }
}, {sequelize:db,modelName:"favorite"}  )




module.exports =Favorites