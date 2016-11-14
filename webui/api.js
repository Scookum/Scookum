//
var express = require('express');

var route = express.Router();

route.get('/', function(req, res) {
  
});

route.get('/login', function(req, res) {
});

route.get('/hosts', function(req, res) {
});

route.get('/hosts/:host_id', function(req, res) {
});

route.get('/hosts/:host_id/resources', function(req, res) {
});

route.get('/hosts/:host_id/resources/:res_id', function(req, res) {
});

route.get('/hosts/:host_id/resources/:res_id/:start', function(req, res) {
});

route.get('/control', function(req, res) {
});

route.get('/control/:id', function(req, res) {
});

module.exports = function(app) {
  app.use('/api', route);
};
