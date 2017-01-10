var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;
//view login
router.get('/',checkNotLogin,function(req,res,next){
	res.send(req.flash('info'));
});
router.post('/',checkNotLogin,function(req,res,next){
	res.send(req.flash('info'));
});

module.exports = router;