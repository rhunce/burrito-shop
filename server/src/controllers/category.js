const categoryRouter = require("express").Router();
const { getCategory } = require("../models/utils.js");

categoryRouter.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const category = await getCategory(categoryId);
  res.json(category);
});

module.exports = { categoryRouter };
