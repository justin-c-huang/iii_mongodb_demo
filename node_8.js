var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iii2');

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";

  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' })

silence.save(function (err, silence) {
  	if (err) return console.error(err);
  	silence.speak();
  	Kitten.find(function (err, kittens) {
  		if (err) return console.error(err);
  		console.log(kittens)
  		mongoose.disconnect();
	})
});

