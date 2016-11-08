//

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());

var mongohost = 'localhost';
var mongoport = 27017;

function startServer(handler) {
  
  app.use(express.static('public'));
  
  var api = require('./api');
  api(app);

  var pages = require('./pages');

  pages(app);

  var callback = handler;
  if (!callback) {
    callback = function() {
      // do nothing
    };
  }
  app.listen(3000, callback);
}

var webui = module.exports = function(handler) {
  app.adminStore = new (require('./AdminStore'))(mongohost, mongoport, function() {
    app.dataStore = new (require('./DataStore'))(mongohost, mongoport, function() {
      startServer(handler);
    });
  });
};

webui(function() {
  console.log("started");
});
