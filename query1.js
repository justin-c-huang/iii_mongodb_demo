
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii");

db.users_for_test.drop();

for(var i = 0; i < 100; i++){ 
	db.users_for_test.insert({age:i,name:'user'+i});
}

cursor = db.users_for_test.find({},{age:1,name:1,_id:0});
showCursorItems(cursor);

/*
print('------------between the ages of 18 and 30-----------------');

cursor = db.users_for_test.find({age:{$gte:18, $lte:30}},{age:1,name:1,_id:0});
showCursorItems(cursor);
*/

print('------------about $in -----------------');
cursor = db.users_for_test.find(
	{age:{$in:[20,30,40]}},
	{age:1,name:1,_id:0}
);
showCursorItems(cursor);
/*
print('------------about $nin-----------------');
cursor = db.users.find(
	{age:{$nin:[20,21,22,23,24,25,26,27,28,29,30]}},
	{age:1,_id:0}
);
showCursorItems(cursor);
*/


