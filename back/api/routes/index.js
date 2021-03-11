const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const favoritesRouter = require("./favorites");
const adminRouter = require("./admin");
router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/admin", adminRouter);

module.exports = router;
