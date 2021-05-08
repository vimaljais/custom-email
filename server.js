const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const custom = require("./controllers/custom.js");

require("dotenv").config();

app.get("/custom", (req, res) => {
  custom.handleCustomEmail(req, res);
});

app.get("/", (req, res) => {
  res.send("it is working!");
});

app.listen(3000, () => {
  console.log("working on port 3000");
});
