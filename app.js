const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/* mongoose.connect("mongodb://localhost:27017/portfolio"); */
/* 
const testSchema = {
  test: String,
};

const Test = mongoose.model("Test", testSchema);

const test = new Test({
  test: "Hello",
}); */

/* test.save(function(err){
    if(!err){
        console.log("Saved the test")
    }
}) */

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/resume", function(req,res){
  res.render("resume")
})

app.get("/contact", function (req, res) {
  res.render("contact");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.listen(port, function (req, res) {
  console.log("Server has started, goodluck   ");
});
