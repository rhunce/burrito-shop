const categoriesRouter = require("express").Router();
const { getCategories } = require("../models/utils.js");

// GET
categoriesRouter.get("/", async (_, res) => {
  const categories = await getCategories();
  res.json(categories);
});

module.exports = { categoriesRouter };
