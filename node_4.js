var mongo = require('mongodb')
var host = 'localhost';
var port = 27017;
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2016-8',server,{safe:true})

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_users_new',findAll);
	}
});

var findAll = function(err,collection){
	if(err) throw err;
	else{
		collection.find({}).toArray(printResult);
	}
}

var printResult = function(err,docs){
	if(err) throw err;
	else{
		console.log(JSON.stringify(docs, null, 4))
		db.close();
	}
}
