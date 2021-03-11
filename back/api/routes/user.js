const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers/middleware/user");
const { userRegister } = require("../controllers/middleware/user");

router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
