var express = require('express'), 
	router = express.Router(),
	mongoose = require('mongoose'),
	Post = mongoose.model('Post');


router.post('/api/posts/list', function(req, res, next) {
	Post.paginate({}, { 
		lean: true, 
		sort: { createdAt: 'desc' }, 
		select: 'title url body createdAt img', 
		page: req.body.page,
		limit: req.body.limit 
	}).then(function(result) {
		return res.status(200).json(result.docs);
	});
});

router.post('/post', function(req, res, next) {
	Post.find({ url: req.body.url }, function(err, post) {
		if (post) return res.status(200).json(post[0]);
		if (err || !post) return res.status(200).json({
			status: 'Não existe o post.'
		})
	});
});

module.exports = function (app) {
	app.use('/', router);
}