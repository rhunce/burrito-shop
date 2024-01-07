const variantRouter = require("express").Router();
const { getVariant } = require("../models/utils.js");

variantRouter.get("/:variantId", async (req, res) => {
  const { variantId } = req.params;
  const variant = await getVariant(variantId);
  res.json(variant);
});

module.exports = { variantRouter };
