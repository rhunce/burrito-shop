const productsRouter = require("express").Router();
const { getProducts } = require("../models/utils.js");

productsRouter.get("/", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

module.exports = { productsRouter };
