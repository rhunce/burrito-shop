const express = require("express");
const { Sequelize } = require("sequelize");
const userController = require("./controllers/user.js");

// ********** Postgres DB Connection via Sequalize ORM **********
const sequelize = new Sequelize("burrito_shop", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

// ********** Server Connection **********
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/user", userController);

// Listen
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = { sequelize };
