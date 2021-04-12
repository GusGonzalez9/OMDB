const { Favorites, User } = require("../../models/index");
const AllFavoritesForUser = (req, res) => {
  console.log("SISI");
  User.findByPk(req.params.userId)
    .then((user) => user.getFavorites())
    .then((favorites) => res.send(favorites));
};

const AddFavorites = async (req, res) => {
  console.log("NONO");
  const { userId, movie } = req.body;
  let user = await User.findOne({ where: { id: userId } });
  let favorita = await Favorites.create(movie).then((favorite) =>
    favorite.setUser(user)
  );
  res.send(favorita);
};

const deleteFavoriteForUser = async (req, res) => {
  const movieId = req.params.movieId;
  const user = req.params.userId;
  const movie = await Favorites.destroy({ where: { imdbID: movieId ,userId:user} })
  const favorites = await Favorites.findAll( {where: {userId:user}})
  res.status(200).send(favorites)
};

module.exports = { AllFavoritesForUser, AddFavorites, deleteFavoriteForUser };
