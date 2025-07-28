const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Router = require("./router/noteRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

connectDB;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/notes", Router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
