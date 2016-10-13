var mongo = require('mongodb')
var util = require('util')
var host = 'localhost';
var port = 27017;
var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('iii-2016-8',server,{safe:true})

var product1 = {type:'book1',price:300}
var product2 = {type:'food1',price:20}
var product3 = {type:'book2',price:320}
var product4 = {type:'food2',price:40}
var product5 = {type:'book3',price:550}
var product6 = {type:'food3',price:60}
var product7 = {type:'book4',price:700}
var product8 = {type:'food4',price:80}

var bookArr = [product1,product3,product5,product7]
var foodArr = [product2,product4,product6,product8]

var bookStore = {name:'BookStore',goods:bookArr}
var foodStore = {name:'FoodStore',goods:foodArr}

var stores = [bookStore,foodStore]

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('node_stores_new',function(err,collection){
			collection.insert(stores,function(err,docs){
				if(err) throw err;
				else{
					collection.find({'goods.price':{$lt:50}},{fields:{name:1,_id:0}}).toArray(
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
