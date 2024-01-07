const { User } = require("../models/index.js");

async function createUser(userData) {
  const newUser = User.create(userData);
  return newUser;
}

module.exports = { createUser };
