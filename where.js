db = connect("localhost:27017/iii-2016-8");
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

db.food2.drop()

db.food2.insert({apple:10,banana:11,peach:10});
db.food2.insert({apple:5,spinach:6,watermelon:60,xx:6})



// cursor = db.food2.find({$where:function(){
// 	for(var current in this){
// 		for(var other in this){
// 			if(current != other && this[current] == this[other]){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }});
// showCursorItems(cursor);


// cursor = db.food2.find( {watermelon : {$exists:true}, $where:'this.watermelon >= 3 && this.apple > 6'} )
// showCursorItems(cursor);

// cursor = db.food2.find({$where:function(){
// 	var count = 0;
// 	for(var current in this){
// 		count++;
// 		if(count > 4){
// 			return true;
// 		}		
// 	}
// 	return false;
// }});
// showCursorItems(cursor);


cursor = db.food2.find({$where:function(){
	var sum = 0;
	for(var current in this){
		if(current != '_id'){
			sum = sum + this[current];
			if(sum > 40){
				return true;
			}
		}
	}
	return false;
}});
showCursorItems(cursor);