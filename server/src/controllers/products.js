const productsRouter = require("express").Router();
const { getProducts, getProduct } = require("../models/utils.js");

productsRouter.get("/", async (_, res) => {
  const products = await getProducts();
  res.json(products);
});

productsRouter.get("/:productID", async (req, res) => {
  const { productID } = req.params;
  const product = await getProduct(productID);
  res.json(product);
});

module.exports = { productsRouter };
