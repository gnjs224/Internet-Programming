var http = require("http");
var express = require("express");
var fs = require("fs");
var app = express();
var router = express.Router();
app.use(express.static("public"));
app.get("", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/me", function (req, res) {
  res.sendFile(__dirname + "/me.jpg");
});
app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/main.png");
});
http.createServer(app).listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});
