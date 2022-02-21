const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/portfolio");

const testSchema = {
  test: String,
};

const Test = mongoose.model("Test", testSchema);

const test = new Test({
  test: "Hello",
});

/* test.save(function(err){
    if(!err){
        console.log("Saved the test")
    }
}) */

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});



app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000, goodluck   ");
});
