var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('router posts');
});

module.exports = router;