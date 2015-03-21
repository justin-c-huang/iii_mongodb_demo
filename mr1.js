
var db = db.getSisterDB("iii3");

var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var findAllAndShow = function(coll_name){
	print('call findAll');
	var cursor = db[coll_name].find();
    showCursorItems(cursor);
}

var findOneAndShow = function(coll_name){
	printjson(db[coll_name].findOne());
}

db.mr1.drop();

db.mr1.insert(
 	[
		{x:10},
		{y:10},
		{z:10},
		{w:10},
		{x:10,w:20}
	]	
);

var map = function(){
	for(var key in this){
		emit(key,{count:1});
	}
}
var reduce = function(key,emits){
	total = 0;
	for(var i in emits){
		total+=emits[i].count;
	}
	return {count:total};
}

var mrResult = db.runCommand({'mapreduce':'mr1','map':map,'reduce':reduce,"out":{inline:1}});
//var mrResult = db.mr1.mapReduce(map,reduce,{out:'AAA'});  
//findAllAndShow('AAA');
printjson(mrResult.results)
