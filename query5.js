
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii-2015-3");

db.test.drop();

var user = {name:'Jusitn',age:35}; db.test.insert(user);

user.name = 'Alan'; user.age = 15; db.test.insert(user);
user.name = 'Kelly'; user.age = 25; db.test.insert(user);
user.name = 'Hopper'; user.age = 12; db.test.insert(user);
user.name = 'James'; user.age = 27; db.test.insert(user);
user.name = 'Lisa'; user.age = 29; db.test.insert(user);

//var cursor = db.test.find().skip(5);
//var cursor = db.test.find().limit(3).sort({age:-1});
//var cursor = db.test.find().sort({age:-1}).limit(3);
//var cursor = db.test.find({},{name:1,_id:0,age:1}).sort({name:1,age:-1});
//var cursor = db.test.find({},{age:1,_id:0,name:1}).sort({age:1,name:1});
showCursorItems(cursor);





