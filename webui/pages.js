//
// for static pages
var express = require('express');

module.exports = function(app) {
  app.set('view engine', 'pug');
  
  app.get('/', function (req, res) {
    res.render('index');
  });
};
