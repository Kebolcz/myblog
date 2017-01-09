var app = require('express')();
var routes = require('./routes');
var config = require('config-lite');
var pkg = require('./package')

routes(app);

app.listen(config.port,function(){
	console.log(`${pkg.name} listening on port ${config.port}`);
});