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

async function getProduct(productId) {
  const product = await Product.findByPk(productId);
  return product;
}

module.exports = { createUser, getProducts, getProduct };
