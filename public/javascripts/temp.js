const request = require('request');
const express = require('express');
var temp;
tempShow = function(city) {
var options = {
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=618dc1b2a71df79d045dd7cb02df99a2`
};
let promise = new Promise((resolve, reject) => {
    request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var temp;
        var object = JSON.parse(body);
        resolve(temp=object.main.temp  );
    }
});
});
 return promise.then(temp => {
console.log ("La temperatura de |"+city+"| es de " +temp + " °F");
return "La temperatura de |"+city+"| es de " +temp + " °F";
});
};
module.exports.tempShow = tempShow;
