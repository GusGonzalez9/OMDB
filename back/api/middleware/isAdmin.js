const isAdmin = async (req, res, next) => {
  if (req.user.role == "admin") {
    return next();
  } else {
    res.status(401).json({ error: "Este usuario no es administrador" });
  }
};

module.exports = isAdmin;
