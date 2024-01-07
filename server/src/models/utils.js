const {
  User,
  Product,
  Variant,
  Order,
  OrderLine,
  OrderLineOptionValue,
  Category,
} = require("../models/index.js");

// USERS UTILS
async function createUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

async function getUsers() {
  const users = await User.findAll();
  return users;
}

async function getUser(userId) {
  const user = await User.findByPk(userId);
  return user;
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

// VARIANTS UTILS
async function getVariants() {
  const variants = await Variant.findAll();
  return variants;
}

async function getVariant(variantId) {
  const variant = await Variant.findByPk(variantId);
  return variant;
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

async function createOrderLine(variantId, quantity, orderId) {
  const orderLinePayload = {
    variantId,
    orderId,
    quantity,
  };
  const orderLine = await OrderLine.create(orderLinePayload);
  return orderLine;
}

async function createOrderLineOptionValue(orderLines) {
  for (const orderLine of orderLines) {
    const { dataValues, optionValues } = orderLine;
    const orderLineId = dataValues.id;
    for (const optionValueId of optionValues) {
      await OrderLineOptionValue.create({
        orderLineId,
        optionValueId,
      });
    }
  }
}

async function updateOrderTotalPrice(order, orderLines) {
  const totalPrice = await getTotalPriceFromOrderLines(orderLines);
  await order.update({ totalPrice });
}

// ORDER HELPERS
async function getTotalPriceFromOrderLines(orderLines) {
  let totalPrice = 0;
  for (const { dataValues: orderLine } of orderLines) {
    const { variantId, quantity } = orderLine;
    const { dataValues: variant } = await Variant.findByPk(variantId);
    const lineTotalPrice = parseFloat(variant.price) * quantity;
    totalPrice += lineTotalPrice;
  }

  return totalPrice;
}

// CATEGORIES UTILS
async function getCategories() {
  const categories = await Category.findAll();
  return categories;
}

async function getCategory(categoryId) {
  const category = await Category.findByPk(categoryId);
  return category;
}

module.exports = {
  createUser,
  getProducts,
  getProduct,
  getOrders,
  getOrder,
  createOrder,
  createOrderLine,
  createOrderLineOptionValue,
  updateOrderTotalPrice,
  getCategories,
  getCategory,
  getUsers,
  getUser,
  getVariants,
  getVariant,
};
