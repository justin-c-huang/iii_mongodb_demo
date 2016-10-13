var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iii-2016-8');

var Dog = mongoose.model('Dog', { name: String });

var kitty = new Dog({ name: '來福' });
kitty.save(function (err) {
	if(err) throw err
	else{
		mongoose.disconnect();
	}
});
