var express = require("express");

var router = express.Router();
var burger = require("../models");

// get route -> index
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data){
   var hbsObject = {
      burger: data
    };

    res.render("index", hbsObject);
  })

});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.Burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    
    res.redirect("/");
  });
});

module.exports = router;

