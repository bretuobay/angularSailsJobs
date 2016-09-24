/**
 * Auth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection : 'postBloggerDatabase',
  tableName : 'user',

  attributes: {

		username: {
			type: 'string',
			required: false,
			unique: true
		},
		email: {
			type: 'email',
			required: true,
			unique: true
		},
		first_name: {
			type: 'string',
			required: false
		},
    last_name: {
			type: 'string',
			required: false
		},
    password: {
      type: 'string',
      required: false
    },

		message_count: {
			type: 'number'
		},
},

beforeCreate: function(values, next) {

    if (!values.password || values.password !== values.confirm_password) {
      return next({err: ["Password doesn't match password confirmation."]});
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);
      values.password = encryptedPassword;
      next();
    });
}

};
