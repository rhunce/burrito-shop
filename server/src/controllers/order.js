const orderRouter = require("express").Router();
const {
  getOrder,
  createOrder,
  createOrderLine,
  createOrderLineOptionValue,
  updateOrderTotalPrice,
} = require("../models/utils.js");

// GET
orderRouter.get("/:orderId", async (req, res) => {
  const { orderId } = req.params;
  const order = await getOrder(orderId);
  res.json(order);
});

// POST
orderRouter.post("/", async (req, res) => {
  // Create Order with UNFULFILLED status
  const order = await createOrder();

  // Create Order Lines
  const orderLinesInfo = req.body;
  const orderLines = [];
  for (const { variantId, quantity, options } of orderLinesInfo) {
    const orderLine = await createOrderLine(variantId, quantity, order.id);
    orderLine.optionValues = options;
    orderLines.push(orderLine);
  }

  // Create OrderLine_OptionValue Lines
  await createOrderLineOptionValue(orderLines);

  // Update Order totalPrice Field
  await updateOrderTotalPrice(order, orderLines);

  res.json(order);
});

// PUT
orderRouter.put("/", async (req, res) => {
  const { orderId, status } = req.body;
  const order = await getOrder(orderId);
  await order.update({ status });
  res.json(order);
});

module.exports = { orderRouter };
