const mongoose = require("mongoose");


const connectDB = async(url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to MongoDB");
    })
    .catch((error) => {
      console.error("❌ Error connecting to MongoDB:", error);
    });
};

module.exports = connectDB;
