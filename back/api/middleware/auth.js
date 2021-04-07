const jwt = require("jsonwebtoken");
/* const privateKey = process.env.KEY_SECRET; */
const privateKey = "clavesecreta1234";
const { User } = require("../models/index");

const generateNewToken = (user) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: user,
    },

    privateKey,
    { algorithm: "HS256" }
  );
};
//no me funciona el jwt.verify
const userAuthenticate = async (req, res, next) => {
  let Token = req.headers.authorization
 
  try{
    let decoded =  jwt.verify(Token,privateKey)
    let user = await User.findOne({ where: { email: decoded.data } });
    if (user) {
      req.user = user;
    }
    return next();
  } catch {
    res.status(401).json({ error: "Usuario no Logueado" });
  }
};

module.exports = { userAuthenticate, generateNewToken };
