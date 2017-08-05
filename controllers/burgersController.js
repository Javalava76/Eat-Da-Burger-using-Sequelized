var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data){
   var hbsObject = {
      burger_data: data
    };

    res.render("index", hbsObject);
  })

});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create(req.body
    
  ).then(function (data){
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  console.log(req.body);

  db.Burger.update({
    devoured: true
  },
  {
    where: {id: req.body.burger_id}
  }
    
    ).then(function(data){
      res.redirect("/");
   
  });
});

module.exports = router;

