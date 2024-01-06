const router = require("express").Router();
// const { User } = require("../models/user.js");

router.post("/create", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.json(userData);
});

// router.get('/', async (req, res) => {
//     const users = await User.findAll()
//     res.json(users)
// })

module.exports = router;
