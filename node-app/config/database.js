var mongoose = require('mongoose');

var options = { user: 'aprovaenem', pass: 'S3nhaFacil', auth: { authdb: "admin" } };
var mongoUrl = '52.67.48.47';

/* Configurações do banco de dados */

var dbpath = 'aproveenem-dev';

var dbConfig = { url: 'mongodb://'+ mongoUrl +':27017/' + dbpath, options: options };

exports.dbConfig = dbConfig;

console.log("config/database.js carregado.");