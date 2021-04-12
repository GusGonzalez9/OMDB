const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/index");
const { userAuthenticate } = require("../middleware/auth");
const {
  AddFavorites,
  AllFavoritesForUser,
  deleteFavoriteForUser
} = require("../controllers/middleware/favorites");

router.get("/:userId", AllFavoritesForUser);
router.delete("/:userId/:movieId",deleteFavoriteForUser)
router.post("/", userAuthenticate, AddFavorites);
module.exports = router;
