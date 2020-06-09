var db = require("../models");

// var express = require("express");
// var app = express.Router();

module.exports = function(app) {

  app.get("/", function(req,res) {
    db.burger.findAll({}).then(function(dbburger) {
      var hbsObject = {
        burgers: dbburger
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbburger) {
      res.json({ id: dbburger.insertId });
    });
  });

  app.put("/api/burgers/:id", function(req,res) {

    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbburger) {
      if (dbburger.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/burgers/:id", function(req,res) {
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbburger) {
      res.json(dbburger);
    });
  });
};

