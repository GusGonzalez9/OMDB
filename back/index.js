const express = require("express");
const morgan = require("morgan");
const routes = require("./api/routes");
const app = express();
const { db } = require("./api/models/index");
const PORT = 4500;
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
  });
});
