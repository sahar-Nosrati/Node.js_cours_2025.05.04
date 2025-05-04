const express = require("express");
const path = require("path");
const router = express.Router();
const data = {};
data.employee = require("../../data/employee.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employee);
  })
  .post((req, res) => {
    res.json({
      "firstName": req.body.firstName,
      "LastName": req.body.LastName,
    });
  })
  .put((req, res) => {
    res.json({
      "firstName": req.body.firstName,
      "LastName": req.body.LastName,
    });
  })
  .delete((req, res) => {
    res.json({
      "id": req.body.id,
    });
  });


  router.route("/:id").get((req,res) => {
    res.json({
      "id" : req.body.id
    })
  })


  module.exports = router;