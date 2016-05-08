/* Dependências */

var express = require('express'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	path = require('path');

/* 
	Vamos usar sessões (não vamos ter preocupacão com muitos usuários logados)
*/

mongoose.connect('mongodb://kelvne:senhadobanco@ds011872.mlab.com:11872/provablog');

require('./database');

var app = express();

/* Configurações do express */

require('./strategies');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'segredo dessa sessao lol' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

/* Alive */

var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});

/* 
	Rotas de User 
*/

var User = mongoose.model('User');

/* DRY */

function response(res, status, error, message) {
	res.status(status).json({
		error: error,
		message: message
	});
}

router.post('/signup', function(req, res, next) {
	User.findOne({ username: req.body.email }, function(err, user) {
		if (user) {
			response(res, 200, 'true', 'E-mail já cadastrado.');
		} else {

			var nUser = new User();
			nUser.username = req.body.email;
			nUser.password = req.body.password;

			nUser.save(function(err) {
				if (!err) {
					response(res, 200, 'false', 'Cadastrado com sucesso.');
				} else {
					response(res, 200, 'true', err);
				}
			});
		}
	});
});

router.post('/signin', passport.authenticate('local'), function(req, res, next) {
	console.log(req.user);
	if (req.isAuthenticated()) {
		res.status(200).json({
			status: 'Logado com sucesso.'
		});
	} else {
		res.status(401).json({
			message: 'Usuário ou senha inválido.'
		});
	}
});

/* Tava procurando né? */

app.use('/', router);

app.use(function(req, res) {
	res.render('index');
}); 

/* Rodando o servidor */

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Rodando na porta " + port);
});