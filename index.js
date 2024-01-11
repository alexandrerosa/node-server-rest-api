require('dotenv').config()

const express = require("express");

const app = express();
const port = process.env.PORT;

app.use(express.json());

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
