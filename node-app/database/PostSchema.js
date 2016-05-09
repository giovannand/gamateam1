var mongoose = require('mongoose'),
	pagination = require('mongoose-paginate'),
	friendlyUrl = require('friendly-url'),
	Schema = mongoose.Schema;

var PostSchema = new Schema ({
	title: String,
	url: String,
	body: String,
	img: String
}, { timestamps: true });

PostSchema.plugin(pagination);

PostSchema.pre('save', function(next) {
	this.url = friendlyUrl(this.title);

	next();
});

mongoose.model('Post', PostSchema);


/* Registrar posts */
var Post = mongoose.model('Post');

/*
nPost = new Post();
nPost.title = 'Saiba como ser aprovado no ENEM';
nPost.body = '<p>Você está querendo ser aprovado no <b>ENEM</b> e procura pelas <b>melhores dicas</b> sobre o tema na internet? Nós podemos te ajudar!</p>';
nPost.img = 'img_post01.png';
nPost.save(); */

console.log("PostSchema carregado.");