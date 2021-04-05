const express = require("express");
const router = express.Router();
const isAdmin = require("../middleware/isAdmin");
const { userAuthenticate } = require("../middleware/auth");
const allUsers = require("../controllers/middleware/users");
router.get("/", userAuthenticate, isAdmin, allUsers);

module.exports = router;
