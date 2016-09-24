/**
 * AuthController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcrypt');

module.exports = {

	userAuthentication : function(req,res,next){

		var user_data = {
      email: req.param('email'),
      password: req.param('password')
    };

			//console.log(user_data)

    if (!req.param('email') || !req.param('password')) {

      return res.json({
      'success' :false,
      'message' : 'Email and Password fields cannot be empty'
		});

    }

		var user_email =req.param('email');

    Auth.findOneByEmail(user_email).exec(function(err, user) {

      if (err) return next(err);

			//console.log(user)

      if (!user) {
				return res.json({
				'success' :false,
				'message' : 'User email was not found'
				});

      }


      bcrypt.compare(req.param('password'), user.password, function(err, valid) {
        if (err) return next(err);


        if (!valid) {

         return res.json({
			      'success' :false,
			      'message' : 'Password given is not valid for this user'
	      });

      }else{

				req.session.authenticated = true;
        req.session.Auth = user;

			//	console.log(valid)

			return res.json({
				 'success' :true,
				 'message' : 'Authentication was successful'
		 });

			}

   });
});

},

	userSessionDestroy : function(req,res,next){
		req.session.authenticated = false;
    req.session.user = undefined;
    //return res.redirect('/');
		// return json for a truely api oriented app
		res.json({
		 success: true,
		 message : 'User was successfully logged out!',
		 data : {}
	 });
	},

	userRegistration : function(req,res,next){

		var user_data = {
      email: req.param('email'),
      password: req.param('password'),
      confirm_password : req.param('confirm_password')
    };

		Auth.create(user_data, function userCreated(err, user) {

		if (err) {

			console.log(err);

			 res.json({
				success: false,
				message : 'Registration failed, please check fields',
				data : err
			});

			}else{

				res.json({
				 success: false,
				 message : 'Registration was successful, you can log in to AwesomeJobs',
				 data : user
			 });
		}

		});
	},

	validatePassword : function(req,res){

		if(user_data.password!==user_data.confirm_password){
			return res.json({
				succes: false,
				message : 'Passwords do not match, please verify'
			});

		}else{

			return res.json({
				succes: true,
				message : 'Passwords are matching, user can authenticate'
			});

		}

	}



};
