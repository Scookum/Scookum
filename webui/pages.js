//
// for static pages
var express = require('express');

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/index2', function (req, res) {
    res.render('index2');
  });
  app.get('/login', function(req, res) {
    res.render('login');
  });
};
