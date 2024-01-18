require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/usersRoutes");
const carsRoutes = require("./routes/carsRoutes");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Mounting the user and car routes
app.use("/users", usersRoutes);
app.use("/cars", carsRoutes);

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});

console.log("Port : ", port);

app.listen(port, () => {
  console.log("Server Listening on port:", port);
});
