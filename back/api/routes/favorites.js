const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/index");
const { userAuthenticate } = require("../middleware/auth");
const {
  AddFavorites,
  AllFavoritesForUser,
  deleteFavorites,
} = require("../controllers/middleware/favorites");

router.get("/:userId", userAuthenticate, AllFavoritesForUser);
router.post("/", userAuthenticate, AddFavorites);
router.delete("/userId", deleteFavorites);

module.exports = router;
