
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii-2015-3");

db.tmp.drop();

db.tmp.insert({_id:1,x:15});
db.tmp.insert({_id:2,x:[5,25]});
db.tmp.insert({_id:3,x:[12,13]});
db.tmp.insert({_id:4,x:[12,36]});
//db.tmp.insert({_id:5,x:[29,1]});

// cursor = db.tmp.find({x:{$gt:10,$lt:20}});
// showCursorItems(cursor);

//cursor = db.tmp.find({x:{$elemMatch:{$gte:10,$lt:20}}});
//showCursorItems(cursor);


// cursor.forEach(function(x){
// 	print("data:");
// 	printjson(x);
// });


/*
db.tmp2.drop();
db.tmp2.insert({ _id: 1, results: [ { product: "abc", score: 10 }, { product: "xyz", score: 5 } ] });
db.tmp2.insert({ _id: 2, results: [ { product: "abc", score: 8 }, { product: "xyz", score: 7 } ] });
db.tmp2.insert({ _id: 3, results: [ { product: "abc", score: 7 }, { product: "xyz", score: 8 } ] });

cursor = db.tmp2.find(
   { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);
showCursorItems(cursor);
*/




// cursor = db.tmp.find(
// 		{ 
// 			x:[12,36]
// 		});
// showCursorItems(cursor);












