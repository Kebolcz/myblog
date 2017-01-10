var app = require('express')();
var routes = require('./routes');
var config = require('config-lite');
var pkg = require('./package')
var session = require('express-session');
var flash = require('connect-flash');

app.use(session({
	secret : config.session.secret
}));

app.use(flash());

routes(app);

app.listen(config.port,function(){
	console.log(`${pkg.name} listening on port ${config.port}`);
});