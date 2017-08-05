var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// EXPRESS=====

var PORT = process.env.PORT || 3000;
var app = express();

// MODEL REQUIREMENT========

var db = require("./models");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================


var routes = require("./controllers/burgersController.js");

app.use("/",routes);


// // Syncing our sequelize models and then starting our Express app
// // =============================================================
db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');

// // Sets up the Express App
// // =============================================================
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Requiring our models for syncing
// // =============================================================
// const db = require('./models');

// // Sets up the Express app to handle data parsing
// // =============================================================
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// // Set Handlebars as the default templating engine.
// // =============================================================
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Static directory
// app.use(express.static('public'));

// // Routes
// // =============================================================
// let html = require('./routes/html-route.js');
// let registration = require('./routes/registration-route.js');

// app.use('/', html);
// app.use('/', registration);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
