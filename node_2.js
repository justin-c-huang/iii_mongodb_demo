var mongo = require('mongodb')
var host = 'localhost';
var port = 27017;
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2016-8',server,{safe:true})

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_Coll',function(err,collection){
			collection.insert({firstName:'Finnxxx',lastName:'chengxxx'},
				 function(err,docs){
				 	if(err) throw err;
				 	else{
				 		console.log(docs);
				 		db.close();	
				 	}
					
				 }
			)
		})
	}
});
