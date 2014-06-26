
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii");

db.tmp.drop();

db.tmp.insert({_id:1,x:15});
db.tmp.insert({_id:2,x:[5,25]});
db.tmp.insert({_id:3,x:[12,13]});
db.tmp.insert({_id:3,x:[12,36]});

cursor = db.tmp.find({x:{$elemMatch:{$gt:10,$lt:20}}});
showCursorItems(cursor);

//cursor = db.tmp.find({x:{$gt:10,$lt:20}});
//showCursorItems(cursor);




