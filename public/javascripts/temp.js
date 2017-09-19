const request = require('request');
const express = require('express');
var temp;
let tempSum;
tempShow = function(city,i) {
var options = {
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=618dc1b2a71df79d045dd7cb02df99a2`
};
let promise = new Promise((resolve, reject) => {
    request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var temp;
        var object = JSON.parse(body);
        resolve(temp=object.main.temp);
    }
});
});
 return promise.then(temp => {
tempSum +=temp;
if (i==8) {
  tempSum=tempSum/9;
  console.log(tempSum);
}
console.log ("La temperatura de |"+city+"| es de " +temp + " °K");
return temp;
});
};
module.exports.tempShow = tempShow;
