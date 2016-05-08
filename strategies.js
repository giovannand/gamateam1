/* Dependências */

var passport = require('passport'),
	localStrategy = require('passport-local'),
	User = require('mongoose').model('User');

passport.use(new localStrategy(
	function (username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) { return done(err); }

			var comparedPassword = function (report, match) {
				if (match) return done(null, user);
				return done(null, false, { message: "Usuário ou senha incorreto(s)."});
			}
			console.log(user)

			if (user) {
				user.comparePassword(password, comparedPassword);
			} else {
				return done(null, false, { message: "Usuário ou senha incorreto(s)."});
			}

		});
	}
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});