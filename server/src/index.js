const express = require("express");
const { Sequelize } = require("sequelize");

// Postgres DB Connection via Sequalize ORM
const sequelize = new Sequelize("burrito_shop", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Server Connection
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hello World" }));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = { sequelize };
