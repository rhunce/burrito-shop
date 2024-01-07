const express = require("express");
const { userRouter } = require("./controllers/user.js");
const { productsRouter } = require("./controllers/products.js");
const { productRouter } = require("./controllers/product.js");
const { variantsRouter } = require("./controllers/variants.js");
const { variantRouter } = require("./controllers/variant.js");
const { ordersRouter } = require("./controllers/orders.js");
const { orderRouter } = require("./controllers/order.js");
const { categoriesRouter } = require("./controllers/categories.js");
const { categoryRouter } = require("./controllers/category.js");
const { usersRouter } = require("./controllers/users.js");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
// app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/product", productRouter);
app.use("/variants", variantsRouter);
app.use("/variant", variantRouter);
app.use("/orders", ordersRouter);
app.use("/order", orderRouter);
app.use("/categories", categoriesRouter);
app.use("/category", categoryRouter);
app.use("/users", usersRouter);

// Listen
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
