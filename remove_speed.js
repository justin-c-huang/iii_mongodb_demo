db.test_remove_speed.drop();
print("remove old data");

print("insert begin.......");
for(var i = 0; i < 100000; i++){
	db.test_remove_speed.insert({foo:'bar',bar:i,z:10-i})
}
print("insert end.......");

var doRemove = function(){
	var start = (new Date()).getTime();
	db.test_remove_speed.remove();
	db.test_remove_speed.findOne();
	var timeDiff = (new Date()).getTime() - start;
	print("Remove took:" + timeDiff + "ms");
}

doRemove();

for(var i = 0; i < 100000; i++){
	db.test_remove_speed.insert({foo:'bar',bar:i,z:10-i})
}

var doDrop = function(){
	var start = (new Date()).getTime();
	db.test_remove_speed.drop();
	db.test_remove_speed.findOne();
	var timeDiff = (new Date()).getTime() - start;
	print("Drop took:" + timeDiff + "ms");
}

doDrop();