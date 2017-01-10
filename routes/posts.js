var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

router.get('/',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
});

router.post('/',checkLogin,function(req,res,next){
	res.send(req.flash('info'));
})

module.exports = router;