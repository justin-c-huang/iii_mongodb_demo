var MongoClient = require('mongodb').MongoClient;
  //, format = require('util').format;

var mongolab = 'mongodb://justin.huang:1qaz2wsx@ds027908.mongolab.com:27908/iii';
var local = 'mongodb://127.0.0.1:27017/iii'

MongoClient.connect(local, function(err, db) {
  if(err) throw err;
  db.collectionNames(function(err, collections){
      console.log(collections);
      process.exit(0);
  });
});