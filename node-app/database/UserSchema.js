var mongoose = require('mongoose')
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: String,
	age: String,
	location: String
}, { timestamps: true });

mongoose.model('User', UserSchema);

console.log("UserSchema carregado.");