var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require('./models');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use('/burgers', routes);
app.use('/burgers/create', routes);
app.use('/burgers/eat/:id', routes);

require('./controllers/burgerController.js')(app);

db.sequelize.sync().then(function(){
	app.listen(PORT);
});