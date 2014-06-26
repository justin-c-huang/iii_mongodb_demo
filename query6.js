
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii");

db.tmp.drop();

db.tmp.insert({_id:1,x:15});
db.tmp.insert({_id:1,x:25});

var err = db.runCommand({getLastError:1});
printjson(err);





