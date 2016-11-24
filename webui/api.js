//
var express = require('express');
var url = require('url');

var route = express.Router();

route.get('/', function(req, res) {
  
});

route.get('/login', function(req, res) {
});

route.get('/data', function(req, res) {
  res.json({
    charts: [
      "activity", "heat"
    ]
  });
});

route.get('/hosts', function(req, res) {
  res.json({
    hosts:[
	"localhost",
	"vm-pepper"
    ]
  });
});

route.get('/hosts/:host_id', function(req, res) {
  
});

route.get('/hosts/:host_id/sources', function(req, res) {
});

route.get('/hosts/:host_id/sources/:src_id', function(req, res) {
  var query = url.parse(req.url, true).query;
  var start = query.start;
  var end = query.end;
});

route.get('/hosts/:host_id/resources/:src_id/:start', function(req, res) {
});

route.get('/hosts/:host_id/resources/:src_id/:start', function(req, res) {
});

route.get('/control', function(req, res) {
});

route.get('/control/:id', function(req, res) {
});

module.exports = function(app) {
  app.use('/api', route);
};
