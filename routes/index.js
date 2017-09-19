const express = require('express');
const router = express.Router();
const request = require('request');
const temp = require('../public/javascripts/temp.js');
/* GET home page. */
router.get('/', (req, res, next) => {

  let promise = new Promise((resolve, reject) => {
    let info;
    let cities = ["Huelva", "Sevilla", "Cadiz", "Malaga", "Sevilla", "Cardoba", "Jaén", "Granada", "Malaga"];
    let tempCities = [];
    for (let i = 0; i < cities.length; i++) {
      let tempCity;
      tempCity =temp.tempShow(cities[i] + ",es");
      tempCities.push(tempCity);
      console.log("Route ->"+tempCities);
    }
    resolve(info = tempCities);
  });
  promise.then(info => {
    let sumTemp;
    let sumAverage;
    sumTemp = info.reduce((a, b) => b += a);
    sumAverage = sumTemp / values.lenght;
    console.log(sumAverage);
    res.render('index', {
      info: info,
    });
  });
});

module.exports = router;
