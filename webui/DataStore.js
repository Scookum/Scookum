//
var mongo = require('mongodb');
var dbname = 'scookum_data';

var DataStore = function DataStore(host, port, handler) {
  var serverhost = 'localhost';
  var serverport = 27017;
  
  if (host && host !== "") {
    serverhost = host;
  }
  if (port) {
    serverport = port;
  }
  var connstr = 'mongodb://' + serverhost + ':' + serverport + '/' + dbname;
  mongo.MongoClient.connect(connstr, function (err, db) {
    if (err) {
      //throw err;
      console.log(err);
    } else {
      this.db = db;
      if (handler) {
	handler(err, db);
      }
    }
  });
};

DataStore.prototype = {
  
};
DataStore.prototype.constructor = DataStore;

module.exports = DataStore;

