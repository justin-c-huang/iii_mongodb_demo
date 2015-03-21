var mongo = require('mongodb')
var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT; //27017
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii3',server,{safe:true})

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_users',function(err,collection){
			collection.insert({firstName:'Justin',lastName:'Huang'},function(err,docs){
				console.log(docs);
				db.close();
			})
		})
	}
});
