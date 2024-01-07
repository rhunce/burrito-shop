const { User, Product, Order, OrderLine } = require("../models/index.js");

// USERS UTILS
async function createUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

// PRODUCTS UTILS
async function getProducts() {
  const products = await Product.findAll();
  return products;
}

async function getProduct(productId) {
  const product = await Product.findByPk(productId);
  return product;
}
// ORDERS UTILS
async function getOrders() {
  const orders = await Order.findAll();
  return orders;
}

async function getOrder(orderId) {
  const order = await Order.findByPk(orderId);
  return order;
}

async function createOrder() {
  const order = await Order.create({
    status: "UNFULFILLED",
  });
  return order;
}

async function createOrderLine(productId, quantity, orderId) {
  const orderLinePayload = {
    productId,
    orderId,
    quantity,
  };
  const orderLine = await OrderLine.create(orderLinePayload);
  return orderLine;
}

module.exports = {
  createUser,
  getProducts,
  getProduct,
  getOrders,
  getOrder,
  createOrder,
  createOrderLine,
};
