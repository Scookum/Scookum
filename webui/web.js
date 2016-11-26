/**
 * web.js
 *
 * Scookum web interface
 * Main entry point.
 * Copyright (C) 2016 Hiroyoshi Kurohara.
 * 
 */
//

var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

var mongohost = 'localhost';
var mongoport = 27017;

function startServer(handler) {
  
  app.use(bodyparser.json());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(require('stylus').middleware({ src: path.join(__dirname, 'public') }));
  
  require('./api')(app);
  require('./pages')(app);

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
