const orderRouter = require("express").Router();
const {
  getOrder,
  createOrder,
  createOrderLine,
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
  const { id: orderId } = await createOrder();

  // [
  //   { productId: 1, quantity: 3, options: [ 1, 3, 6, 7, 12, 13 ] },
  //   { productId: 1, quantity: 2, options: [ 1, 3, 6, 7, 12, 13 ] },
  //   { productId: 3, quantity: 3, options: [ 3, 6, 7, 12, 13 ] }
  // ]
  // Create Order Lines
  const orderLinesInfo = req.body;
  const orderLines = [];
  for (const { productId, quantity, options } of orderLinesInfo) {
    const orderLine = await createOrderLine(productId, quantity, orderId);
    orderLine.optionValues = options;
    orderLines.push(orderLine);
  }

  console.log("orderLines: ", orderLines);
  // Create OrderLine_OptionValue Lines
  // TODO

  // Update Order totalPrice Field
  // TODO

  res.json("order");
});

module.exports = { orderRouter };
