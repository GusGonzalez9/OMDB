const S = require("sequelize");
const db = require("./db");
const { hash, genSalt } = require("bcrypt");
class User extends S.Model {}
User.prototype.hashPassword = function (password) {
  return hash(password, this.salt);
};

User.init(
  {
    firstName: {
      type: S.STRING,
      allowNull: false,
    },
    avatar: {
      type: S.STRING,
      allowNull: true,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    salt: {
      type: S.STRING,
    },
    role: {
      type: S.ENUM,
      values: ["client", "admin"],
      defaultValue: "client",
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  return genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
