module.exports = function(app){
	app.get('/',function(req,res){
		res.redirect('/posts');
	})

	app.use('/signup',require('./signup'));
	app.use('/signin',require('./signin'));
	app.use('/signout',require('./signout'));
	app.use('/posts',require('./posts'));

	app.use('/err',function(req,res){
		console.log('throw an error');
		throw new Error('Router /err throw an err.');
	});

	app.use(function(req,res){
		console.log('未找到路由');
		res.send('404');
	});
	app.use(function(err,req,res){
		console.log('服务器内部错误: '+ err);
		res.send('500');
	});
};