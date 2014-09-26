
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii2");

db.test.drop();

var user = {name:'justin',age:20};
db.test.insert(user);

user.name = 'Alan'; user.age = 32; db.test.insert(user);
user.name = 'Kelly'; user.age = 25; db.test.insert(user);
user.name = 'Hopper'; user.age = 12; db.test.insert(user);
user.name = 'James'; user.age = 51; db.test.insert(user);
user.name = 'Lisa'; user.age = 65; db.test.insert(user);

var cursor = db.test.find().skip(5);
//var cursor = db.test.find().limit(3).sort({age:1});
showCursorItems(cursor);





