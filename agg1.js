
var db = db.getSisterDB("iii");

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

findOneAndShow('users');

print('--------------------------');
/*
var cursor = db.users.aggregate(
		{$match:{age:15}},
        {$project:{'NAME':'$username',age:1}},
        {$limit:5}
);*/
/*
var cursor = db.users.aggregate(
		{$match:{age:15}},
        {$project:{
        	       'NAME':'$username',
                   'add100Years':{$add:['$age',100]}
                   }
        },
        {$limit:5}
);
*/

var cursor = db.users.aggregate(
				{
					$group:{_id:'$age', count : { $sum : 1 }}
				},
				{$sort:{'_id':1}}
)
showCursorItems(cursor);




//printjson(db.ttl_coll.stats());
