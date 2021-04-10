const { Favorites, User } = require("../../models/index");
const AllFavoritesForUser = (req, res) => {
  console.log(req.params.id)
  User.findByPk(req.params.userId)
    .then((user) => user.getFavorites())
    .then((favorites) => res.send(favorites));
};

const AddFavorites = async(req, res) => {
  console.log(req.body)
  const { userId, movie} = req.body;
  let user = await User.findOne({where:{id : userId}})
  let favorita = await Favorites.create(movie).then(favorite => favorite.setUser(user))
  res.send(favorita)
}; 




module.exports = { AllFavoritesForUser, AddFavorites };
