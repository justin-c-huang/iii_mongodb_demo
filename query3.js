
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii-2015-3");

db.food.drop();

db.food.insert({_id:1,fruit:['apple','banana','peach']});
db.food.insert({_id:2,fruit:['apple','watermelon','orange']});
db.food.insert({_id:3,fruit:['cherry','banana','apple']});
db.food.insert({_id:4,fruit:['banana','apple']});


// cursor = db.food.find({fruit:'banana'});
// showCursorItems(cursor);

// cursor = db.food.find({'fruit.2':'orange'});
// showCursorItems(cursor);


// cursor = db.food.find({
// 	                  	fruit:{
// 	                    	$all:['apple','cherry']
// 	                   	}
//                       }
// );
// showCursorItems(cursor);


// cursor = db.food.find({fruit:{$size:3}});
// showCursorItems(cursor);

// cursor = db.food.find({},{fruit:{$slice:1}});
// showCursorItems(cursor);

// cursor = db.food.find({},{fruit:{$slice:[0,2]},_id:0});
// showCursorItems(cursor);

// cursor = db.food.find({},{fruit:{$slice:-1},_id:0});
// showCursorItems(cursor);



// cursor = db.food.find({'fruit':'apple'},{"fruit.$":1});
// showCursorItems(cursor);







[3,4,5,6,7,8].forEach(function(x){
	print(x*2);
});









