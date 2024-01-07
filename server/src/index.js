const express = require("express");
const { usersRouter } = require("./controllers/users.js");
const { productsRouter } = require("./controllers/products.js");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Listen
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
