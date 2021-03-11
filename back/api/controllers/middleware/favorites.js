const { Favorites, User } = require("../../models/index");
const AllFavoritesForUser = (req, res) => {
  User.findByPk(req.params.userId)
    .then((user) => user.getFavorites())
    .then((favorites) => res.send(favorites));
};

const AddFavorites = (req, res) => {
  const { userId, title, poster } = req.body;
  Favorites.create({ title, poster, userId }).then((favorite) =>
    res.send(favorite)
  );
}; // enviarle el userId es lo mismo que setearselo con favorite.setUser(user)

const deleteFavorites = async (req, res) => {
  await Favorites.findByPk(req.params.id);
  const allFavorites = Favorites.findAll();
  res.send(allFavorites);
};

module.exports = { AllFavoritesForUser, AddFavorites, deleteFavorites };
