const { User, Product } = require("../models/index.js");

// USER UTILS
async function createUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

// PRODUCT UTILS
async function getProducts() {
  const products = await Product.findAll();
  return products;
}

module.exports = { createUser, getProducts };
