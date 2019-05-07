// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/data", function(req, res) {
    var dbQuery = "SELECT * FROM history.history";
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  


};
