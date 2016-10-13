var mongo = require('mongodb')
var host = 'localhost';
var port = 27017;   //mongo.Connection.DEFAULT_PORT; //27017
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2016-8',server,{safe:true})

db.open(function(err,db){
	if(err) throw err;
	else{
		console.log('open DB: OK');
		db.close();
	}
});

db.on('close',function(err,db){
	if(err) throw err;
	else console.log('close DB: OK');
})



