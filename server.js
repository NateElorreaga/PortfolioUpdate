var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
 });