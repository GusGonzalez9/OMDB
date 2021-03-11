const jwt = require("jsonwebtoken");
const privateKey = "clavesecreta1234";

//a la hora de hacer el login, le damos un token al user

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

const decode = (idToken) => {
  return jwt.verify(idToken, privateKey);
};

const userAuthenticate = async (req, res) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.slice(7);
    let decoded = await decode(idToken);
  }
};

module.exports = { userAuthenticate, decode, generateNewToken };
