/* Dependências */

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

module.exports = function (app) {
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');

	app.use(bodyParser.json()); // ?????
	app.use(bodyParser.urlencoded({ extended: false })); // ?????
	app.use(express.static(path.join(__dirname, 'public'))); 
	app.use(express.static(path.join(__dirname, 'bower_components')));	

	/* Rotas */

	var router = express.Router();

	var route = router.get('/', function (req, res, next) {
		res.render('index');
	});

	app.use('/', route);

	/* Rotas */

	require('./api/users.js')(app);
	require('./api/posts.js')(app);

	app.use(function(req, res) {
		res.render('index');
	});
}
