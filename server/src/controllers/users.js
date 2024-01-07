const usersRouter = require("express").Router();
const { getUsers } = require("../models/utils.js");

// GET
usersRouter.get("/", async (_, res) => {
  const users = await getUsers();
  res.json(users);
});

module.exports = { usersRouter };
