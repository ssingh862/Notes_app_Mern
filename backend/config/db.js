const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database conneted Successfull!");
  })
  .catch((err) => {
    console.log("Connection faild ", err);
    return exit;
  });

module.exports = connectDB;
