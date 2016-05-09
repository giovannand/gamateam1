/* Dependências */

var express = require('express'), 
	router = express.Router(),
	mongoose = require('mongoose'),
	User = mongoose.model('User');

router.post('/api/users/new', function(req, res) {
	User.findOne({ email: req.body.email }, function(err, user) {
		if (!user) {
			var nUser = new User();
			nUser.email = req.body.email;
			nUser.age = req.body.age;
			nUser.location = req.body.location;

			nUser.save(function(err) {
				if (!err) {
					res.status(200).json({
						success: true,
					});
				} else {
					res.status(200).json({
						success: false
					});
				}
			});
		} else {
			res.status(200).json({
				success: false,
				message: 'Você já registrou! :)'
			});
		}
	});
});

module.exports = function (app) {
	app.use('/', router);
}