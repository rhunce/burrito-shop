const variantsRouter = require("express").Router();
const { getVariants } = require("../models/utils.js");

variantsRouter.get("/", async (_, res) => {
  const variants = await getVariants();
  res.json(variants);
});

module.exports = { variantsRouter };
