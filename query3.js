
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii3");

db.food.drop();

db.food.insert({_id:1,fruit:['apple','banana','peach']});
db.food.insert({_id:2,fruit:['apple','kumpuat','orange']});
db.food.insert({_id:3,fruit:['cherry','banana','apple']});
db.food.insert({_id:4,fruit:['banana','apple']});

var cursor = db.food.find();

[3,4,5,6,7,8].forEach(function(x){
	print(x*2);
});

// cursor = db.food.find({fruit:'banana'});
// showCursorItems(cursor);

// cursor = db.food.find({'fruit.2':'orange'});
// showCursorItems(cursor);


// cursor = db.food.find({
// 	                  	fruit:{
// 	                    	$all:['apple','banana']
// 	                   	}
//                       }
// );
// showCursorItems(cursor);

// cursor = db.food.find({fruit:{$size:2}});
// showCursorItems(cursor);

// cursor = db.food.find({},{fruit:{$slice:1}});
// showCursorItems(cursor);

// cursor = db.food.find({'fruit.2':'orange'});
// showCursorItems(cursor);

// cursor = db.food.find({'fruit.2':'orange'},{"fruit.$":1});
// showCursorItems(cursor);


// cursor = db.food.find({},{fruit:{$slice:[1,2]},_id:0});
// showCursorItems(cursor);

// cursor = db.food.find({},{fruit:{$slice:-1},_id:0});
// showCursorItems(cursor);









