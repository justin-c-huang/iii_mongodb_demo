db = connect("localhost:27017/iii-2015-3");

var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

//var db = db.getSisterDB("iii-2015-3");
//var db = db.getSiblingDB("iii3");

db.iiiCollection.drop();

for(var i = 0; i < 100; i++){ 
	db.iiiCollection.insert({age:i,name:'user'+i});
}


// cursor = db.iiiCollection.find({},{age:1,_id:0});
// showCursorItems(cursor);


// print('------------between the ages of 18 and 30-----------------');

// cursor = db.iiiCollection.find({age:{$gte:18, $lte:30}},{name:1,age:1,_id:0});
// showCursorItems(cursor);



// print('------------about $in -----------------');
// cursor = db.iiiCollection.find(
// 	{age:{$in:[25,36,47,58,69]}},
// 	{age:1,name:1,_id:0}
// );
// showCursorItems(cursor);


print('------------about $nin-----------------');
cursor = db.iiiCollection.find(
	{age:{$nin:[20,21,22,23,24,25,26,27,28,29,30]}},
	{age:1,_id:0}
);
showCursorItems(cursor);



