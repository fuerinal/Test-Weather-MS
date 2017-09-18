const express = require('express');
const router = express.Router();
const request = require('request');
const temp = require('../public/javascripts/temp.js');
/* GET home page. */
router.get('/', (req, res, next) => {
  let promise = new Promise((resolve, reject) => {
    var info;
    resolve(info = temp.tempShow("Albacete,es"));

  });
  promise.then(info => {
    res.render('index', {
      info: info,
    });
  });
});

module.exports = router;
