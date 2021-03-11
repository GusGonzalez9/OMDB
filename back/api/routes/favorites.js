const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/index");
const {
  AddFavorites,
  AllFavoritesForUser,
  deleteFavorites,
} = require("../controllers/middleware/favorites");

router.get("/:userId", AllFavoritesForUser);
router.post("/", AddFavorites);
router.delete("/", deleteFavorites);

module.exports = router;
