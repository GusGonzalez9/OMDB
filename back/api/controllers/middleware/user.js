const { User } = require("../../models");
const { generateNewToken } = require("../../middleware/auth");
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    const hasheada = await user.hashPassword(password); // es la password hasheada
    if (user.password == hasheada) {
      let token = generateNewToken(user.email);
      return res.status(200).send({ user: user, token: token });
    }
    return res.status(401).send({ error: "password" });
  } catch {
    console.log("Entre al catch");
    res.status(401).send({ error: "email" });
  }
};

const userRegister = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch {
    res.sendStatus(500);
  }
};

const userData = (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user);
  }
  res.status(401).json({ error: "Unauthorized" });
};

module.exports = { userLogin, userRegister, userData };
