require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./app/router");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use(router);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
