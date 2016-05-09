/* Dependências */

var express = require('express'),
	database = require('./config/database'),
	glob = require('glob'),
	mongoose = require('mongoose');

mongoose.connect(database.dbConfig.url, database.dbConfig.options);

var schemas = glob.sync('database/*.js');
schemas.forEach(function(schema) {
	require('./' + schema);
});

var app = express();

require('./conf')(app);

var port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port, function() {
	console.log("Servidor rodando na porta " + port);
});