var mongo = require('mongodb')
var util = require('util')
var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT; //27017
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2015-2',server,{safe:true})

var product1 = {type:'book1',price:10}
var product2 = {type:'food1',price:20}
var product3 = {type:'book2',price:30}
var product4 = {type:'food2',price:40}
var product5 = {type:'book3',price:50}
var product6 = {type:'food3',price:60}
var product7 = {type:'book4',price:70}
var product8 = {type:'food4',price:80}

var bookArr = [product1,product3,product5,product7]
var foodArr = [product2,product4,product6,product8]

var bookStore = {name:'store1',goods:bookArr}
var foodStore = {name:'store2',goods:foodArr}

var stores = [bookStore,foodStore]

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_stores',function(err,collection){
			collection.insert(stores,function(err,docs){
				if(err) throw err;
				else{
					collection.find({'goods.price':{$lt:50}},{fields:{name:1},limit:1,skip:1}).toArray(
						function(err,docs){
							if(err) throw err;
							else{
								console.log(util.inspect(docs,{depth:3}))
								db.close();
							}
						})
					}
				})
			})
		}
	});

