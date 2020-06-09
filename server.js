var express = require("express");
var Handlebars = require("handlebars");
var expressHandlebars = require("express-handlebars");
var {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
 }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

