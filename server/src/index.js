const express = require("express");
const { userRouter } = require("./controllers/user.js");
const { productsRouter } = require("./controllers/products.js");
const { productRouter } = require("./controllers/product.js");
const { ordersRouter } = require("./controllers/orders.js");
const { orderRouter } = require("./controllers/order.js");
const { categoriesRouter } = require("./controllers/categories.js");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
// app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/product", productRouter);
app.use("/orders", ordersRouter);
app.use("/order", orderRouter);
app.use("/categories", categoriesRouter);

// Listen
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
