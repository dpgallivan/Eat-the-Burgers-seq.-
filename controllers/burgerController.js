var db = require('../models/burgers.js');

module.exports = function(app) { 
app.get("/burgers", function(req, res) {
  db.burger.findAll({}).then(function(results){
    var hbOject = {burgers: results};
    res.render('index', hbObject);
  });
});

app.post("/burgers/create", function(req, res) {
  var burger_name = req.body.burger_name;
  db.burger.create({
    burger_name: burger_name,
  }).then(function(results) {
    res.redirect("/");
  });
});

app.put("/burgers/eat/:id", function(req, res) {
  var id = req.body.id;
  var eater = req.body.eater;
  db.burger.update({
    devoured: true,
  }, {
      where: {
        id:id
      }
  }).then(function(results){
    res.direct('/');
  });
});

}

