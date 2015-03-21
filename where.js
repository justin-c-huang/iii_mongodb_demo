var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

db.food.drop()

db.food.insert({apple:1,banana:10,peach:3});
db.food.insert({apple:8,spinach:3,watermelon:4,banana:2})




// cursor = db.food.find({$where:function(){
// 	for(var current in this){
// 		for(var other in this){
// 			if(current != other && this[current] == this[other]){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }});

//cursor = db.food.find( {watermelon : {$exists:true}, $where:'this.watermelon>3'} )

showCursorItems(cursor);