const userRouter = require("express").Router();

userRouter.post("/create", async (req, res) => {
  const userData = req.body;
  console.log("userData: ", userData);
  res.json(userData);
  //   const { User } = require("../models/user.js");
  //   const newUser = await User.create(userData);
  //   console.log("newUser: ", newUser);
});

module.exports = { userRouter };
