db = connect("localhost:27017/iii-2015-3");
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

db.food2.drop()

db.food2.insert({apple:1,banana:2,peach:6});
db.food2.insert({apple:8,spinach:8,watermelon:2})




cursor = db.food2.find({$where:function(){
	for(var current in this){
		for(var other in this){
			if(current != other && this[current] == this[other]){
				return true;
			}
		}
	}
	return false;
}});
showCursorItems(cursor);

// cursor = db.food2.find( {watermelon : {$exists:true}, $where:'this.watermelon >= 3'} )
// showCursorItems(cursor);

// cursor = db.food2.find({$where:function(){
// 	var count = 0;
// 	for(var current in this){
// 		count++;
// 		if(count >= 3){
// 			return true;
// 		}		
// 	}
// 	return false;
// }});
// showCursorItems(cursor);

// cursor = db.food2.find({$where:function(){
// 	var sum = 0;
// 	for(var current in this){
// 		if(current != '_id'){
// 			sum = sum + this[current];
// 			if(sum > 9){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }});
// showCursorItems(cursor);