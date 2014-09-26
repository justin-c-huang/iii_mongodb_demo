
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii2");

//db.users_non_index.drop();


// var start = (new Date()).getTime();

// for(i = 0; i<1000000; i++){
// 	db.usersIndex.insert(
// 		{
// 			i:i,
// 			username:'user'+i,
// 			age:Math.floor(Math.random()*120),
// 			created: new Date()
// 		}
// 	);
// }

// print((new Date()).getTime() - start);


//db.users.ensureIndex({username:1})
//db.users.ensureIndex({age:1,username:1})




//db.users.ensureIndex({username:1,age:1})



// print('----------------------------------------------------');
// var explainObj = db.usersNoIndex.find({username:'user101'}).explain();
// printjson(explainObj)
// print('----------------------------------------------------');
// var explainObj2 = db.usersIndex.find({username:'user101'}).explain();
// printjson(explainObj2)
//var explainObj = db.users.find({"_id" : ObjectId("539c05971a3a5b2299d862e3")}).explain();

//db.users.ensureIndex({age:1,username:1})





/*

var explainObj1 = db.users.find({
	 "age" : {"$gte" : 21, "$lte" : 50}
	})
	.sort({"username" : 1})
	.limit(1000)
	.hint({age:1,username:1})
 	.explain();

print('use age_username index spend:'+explainObj1.millis+'ms');

var explainObj2 = db.users.find({
	 "age" : {"$gte" : 21, "$lte" : 50}
	})
	.sort({"username" : 1})
	.limit(1000)
	.hint({username:1,age:1})
 	.explain();

print('use username_age index spend:'+explainObj2.millis+'ms');
*/


var explainObj = db.usersIndex.find({})
	.limit(100000)
	.sort({age:1,username: 1})
	.explain();

printjson(explainObj);


//var explainObj = db.users.find({username:'user101'}).limit(1).explain();
//var explainObj = db.users.find({username:'user999999'}).limit(1).explain();
//printjson(explainObj);





