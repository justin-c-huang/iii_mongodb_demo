var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii2");
db.usersRandom.drop()
var start = (new Date()).getTime();

 for(i = 0; i<1000000; i++){
 	db.usersRandom.insert(
 		{
 			i:i,
 			username:'user'+i,
 			random: Math.random(),
 			random2: i/1000000
 		}
 	);
 }

 print((new Date()).getTime() - start);

var useSkipToRandomFindUser = function(){
	var start = (new Date()).getTime();
	var total = db.usersRandom.count();
	var random = Math.floor(Math.random()*total);
	print("random:"+random);
	var cursor = db.usersRandom.find().skip(random).limit(1);
	showCursorItems(cursor);
	print("use skip:"+  ((new Date()).getTime() - start) + " ms");
}

var useGtOrLtToRandomFindUser = function(){
	var start = (new Date()).getTime();
	var total = db.usersRandom.count();
	var random = Math.random();
	print("random:"+random);
	var result = db.usersRandom.findOne({random2:{$gt:random}})
	if(result == null){
		print("result == null")
		result = db.usersRandom.findOne({random2:{$lt:random}})
	}
	printjson(result);
	print("use gt or lt:"+  ((new Date()).getTime() - start) + " ms");
}
useSkipToRandomFindUser();
useGtOrLtToRandomFindUser();
