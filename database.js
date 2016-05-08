/* 
	Para a velocidade de programação podemos evitar algumas
		práticas organizacional então vou colocar os Schemas do
		banco nesse arquivo mesmo.
	
	Schemas => User

		UserSchema => { 
			_id
			{ timestamps }
			accessess
			username [ alias email ] como Virtual Attr
			password hashed em bCrypt
			role -> Método mais simples pra definir as roles de usuários
		}
*/

/* Dependências */

var mongoose = require('mongoose'),
	bCrypt = require('bcrypt'),
	friendlyUrl = require('friendly-url');

/* Schemas */

var Schema = mongoose.Schema;

/* UserSchema */

var UserSchema = new Schema({
	username: String,
	password: String,
	info: Schema.Types.Mixed 
	/* 
		só pra referência

		info: { 
			age: Integer,
			location: String,
			scholarship: String
		}
	*/
}, { timestamps: true });


UserSchema.methods.comparePassword = function (password, cb) {
	bCrypt.compare(password, this.password, function(err, match) {
		if (err) return cb(err); 
		cb(null, match);
	});
}

UserSchema.pre('save', function(next) {
	var user = this;

	bCrypt.genSalt(10, function(err, salt) {
		bCrypt.hash(user.password, salt, function(err, hash) {
			user.password = hash;
			console.log(hash);
			console.log(user.password);
			next();
		});
	});
});

mongoose.model('User', UserSchema);

/* PostSchema */

var PostSchema = new Schema({
	title: String,
	url: String,
	text: String
});

PostSchema.pre('save', function(next) {
	this.url = friendlyUrl(this.url);

	next();
});

mongoose.model('Post', PostSchema);

/* RedactionSchema */

var RedactionSchema = new Schema({
	text: String,
	owner: Schema.Types.ObjectId
});