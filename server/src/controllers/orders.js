const ordersRouter = require("express").Router();
const { getOrders } = require("../models/utils.js");

// GET
ordersRouter.get("/", async (_, res) => {
  const orders = await getOrders();
  res.json(orders);
});

module.exports = { ordersRouter };
