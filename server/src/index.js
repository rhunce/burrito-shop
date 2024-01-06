const express = require("express");
const { userRouter } = require("./controllers/user.js");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/user", userRouter);

// Listen
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
