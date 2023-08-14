var express = require('express');
var db = require("../models");
var CityService = require("../services/CityService")
var cityService = new CityService(db);
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("Hello2")
  const cities = await cityService.getAll();
  res.render('cities', { cities });
});

module.exports = router;
