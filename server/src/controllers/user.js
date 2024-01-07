const userRouter = require("express").Router();
const { createUser } = require("../models/utils.js");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

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
