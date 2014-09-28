var mongo = require('mongodb')
var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT; //27017
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii2',server,{safe:true})

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_users',insertToNodeUsersColl);
	}
});

var insertToNodeUsersColl = function(err,collection){
	collection.insert({firstName:'Justin3',lastName:'Huang3'},printInsertResult);
}
var printInsertResult = function(err,docs){
	console.log(JSON.stringify(docs, null, 4));
	db.close();
}
