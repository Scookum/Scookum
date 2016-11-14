//
var mongo = require('mongodb');
var dbname = 'scookum_admin';

var AdminStore = function AdminStore (host, port, handler) {
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
      // throw err;
      console.log(err);
    }
    this.db = db;
    if (handler) {
      handler(err, db);
    }
  });
}; 

AdminStore.prototype = {
  
};
AdminStore.prototype.constructor = AdminStore;

module.exports = AdminStore;
