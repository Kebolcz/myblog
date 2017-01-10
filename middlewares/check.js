module.exports = {
	checkLogin : function(req,res,next){
		//if(!req.session.user){
			req.flash('info','not login in');
			//return res.redirect('/signin');
		//}
		next();
	},

	checkNotLogin : function(req,res,next){
		if(req.session.user){
			req.flash('info','already login on');
			return res.redirect('back');
		}
		next();
	}
};