var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iii3');

var Cat = mongoose.model('cats', { name: String });

var kitty = new Cat({ name: '小咪' });
kitty.save(function (err) {
	if(err) throw err
	else{
		mongoose.disconnect(); 
	}
});