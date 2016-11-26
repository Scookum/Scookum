//
var express = require('express');
var url = require('url');

var route = express.Router();

route.get('/', function(req, res) {
  
});

route.get('/login', function(req, res) {
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
  res.json({
    sources: []
  });
});

route.get('/hosts/:host_id/sources', function(req, res) {
  // dummy data
  res.json({
    sources: [
      "activity",
      "heat",
      "cpu",
      "process"
    ]
  });
});

route.get('/hosts/:host_id/sources/:src_id', function(req, res) {
  var query = url.parse(req.url, true).query;
  var start = query.start;
  var end = query.end;

  var dummyfile = "./chart_dummy/" + req.params.host_id + "_"
      + req.params.src_id + ".js";

  // dummy data
  res.json(require(dummyfile));
});

route.get('/control', function(req, res) {
});

route.get('/control/:id', function(req, res) {
});

module.exports = function(app) {
  app.use('/api', route);
};
