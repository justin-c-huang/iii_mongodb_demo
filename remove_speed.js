//db.test_remove_speed.drop();
//print("remove old data");

print("insert begin.......");
for(var i = 0; i < 10000; i++){
	db.test_remove_speed1.insert({foo:'bar',bar:i,z:10-i})
}
print("insert end.......");

var doRemove = function(){
	var start = (new Date()).getTime();
	db.test_remove_speed1.remove({});
	//db.test_remove_speed.findOne();
	var timeDiff = (new Date()).getTime() - start;
	print("Remove took:" + timeDiff + "ms");
}

doRemove();

print("insert begin.......");
for(var i = 0; i < 10000; i++){
	db.test_remove_speed2.insert({foo:'bar',bar:i,z:10-i})
}
print("insert end.......");

var doDrop = function(){
	var start = (new Date()).getTime();
	db.test_remove_speed2.drop();
	//db.test_remove_speed.findOne();
	var timeDiff = (new Date()).getTime() - start;
	print("Drop took:" + timeDiff + "ms");
}

doDrop();