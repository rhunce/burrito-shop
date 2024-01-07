const userRouter = require("express").Router();
const { createUser, getUser } = require("../models/utils.js");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

// GET
userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("userId: ", userId);
  const user = await getUser(userId);
  res.json(user);
});

// POST
userRouter.post("/", async (req, res) => {
  const userData = req.body;
  const { password } = userData;
  bcrypt.hash(password, SALT_ROUNDS, async function (err, hash) {
    userData.password = hash;
    const newUser = await createUser(userData);
    res.json(newUser);
  });
});

module.exports = { userRouter };
