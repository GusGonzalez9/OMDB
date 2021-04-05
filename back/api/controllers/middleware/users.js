const { User } = require("../../models/index");
const allUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
};

module.exports = allUsers;
