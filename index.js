const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = mongoose.connect("mongodb://localhost/bookAPI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
const Book = require("./models/bookModel");
const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
