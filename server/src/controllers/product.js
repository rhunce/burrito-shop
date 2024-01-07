const productRouter = require("express").Router();
const { getProduct } = require("../models/utils.js");

productRouter.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  const product = await getProduct(productId);
  res.json(product);
});

module.exports = { productRouter };
