const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./data.json");

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(
    "Hello World! This anyo assignment api server by Raushan Kumar for Yoliday LLP"
  );
});

app.get("/project", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
