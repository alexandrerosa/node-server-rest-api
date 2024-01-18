const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: String,
  // Add more fields as needed
});

module.exports = mongoose.model("Car", carSchema);
