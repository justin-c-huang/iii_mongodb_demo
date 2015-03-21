
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("iii3");

db.inventory.drop();

var productA = {name: 'A', quantity: 50, price: 10, level: 10}
var productB = {name: 'B', quantity: 20, price: 20, level: 30}
var productC = {name: 'C', quantity: 50, price: 30, level: 20}
var productD = {name: 'D', quantity: 30, price: 10, level: 50}
var productE = {name: 'E', quantity: 60, price: 10, level: 60}
var productF = {name: 'F', quantity: 80, price: 20, level: null}
var productG = {name: 'G', quantity: 10, price: 90, level: null}
var productH = {name: 'H', quantity: 60, price: 6}

db.inventory.insert([
	productA,
	productB,
	productC,
	productD,
	productE,
	productF,
	productG,
	productH
]);

/*
cursor = db.inventory.find( {$or:[
	                             {quantity:10},
                                 {price:10}
	                            ]
	                        },
	                        {_id:0}
);

showCursorItems(cursor);
*/



/*
print('-------------------------------------------')

cursor = db.inventory.find( {
	                          price:{
	                          	      $not:{
	                          	      	     $gte:20
	                          	      	   }
	                          	    }
	                        },
	                        {_id:0}
);
showCursorItems(cursor);
*/


print('-------------------------------------------')
cursor = db.inventory.find({level:null},{_id:0});
showCursorItems(cursor);


/*
print('-------------------------------------------')
cursor = db.inventory.find({
	                         level:{
	                         	     $in:[null],
	                         	     $exists:true
	                         	   }
	                       },
	                       {_id:0}
);
showCursorItems(cursor);
*/






//cursor = db.inventory.find({},{_id:0});
//showCursorItems(cursor);



