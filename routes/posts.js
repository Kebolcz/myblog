var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

//this router don`t use checklogin middleware.Because this router is used for visitor to browse blogs,don`t check login
/*router.get('/',checkLogin,function(req,res,next){*/
router.get('/',function(req,res,next){
	res.send(req.flash('info'));
});
//router to publish a article
router.post('/',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
})
//the view of publish articles
router.get('/create', checkLogin, function(req, res, next) {
	res.send(req.flash('info'));
});
//Get /posts/:postId  the view of a publish article[noncheck]
router.get('/:postId', function(req, res, next) {
  res.send(req.flash());
});
//POST /posts/:postId/edit edit a article
router.post('/:postId/edit',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
});
//Get /posts/:postId/remove
router.get('/:postId/remove',checkLogin,function(req,res,next){
	res.send(req.falsh('info'));
});
//POST /posts/:postId/comment
router.post('/:postId/comment',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
});
//Get /posts/:postId/comment/:commentId/remove
router.get('/:postId/comment/:commentId/remove',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
});

module.exports = router;