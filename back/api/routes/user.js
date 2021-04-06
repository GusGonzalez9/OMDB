const express = require("express");
const router = express.Router();
const { userLogin, userRegister } = require("../controllers/middleware/user");
const { userAuthenticate } = require("../middleware/auth");
const { userData } = require("../controllers/middleware/user");

router.post("/loggin", userLogin);
router.post("/register", userRegister);
router.get("/me", userAuthenticate, userData);

module.exports = router;
