var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

db.food.drop()

db.food.insert({apple:1,banana:1,peach:3});
db.food.insert({apple:8,spinach:3,watermelon:3})

cursor = db.food.find({$where:function(){
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