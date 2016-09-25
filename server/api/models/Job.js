/**
 * Job.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection : 'postBloggerDatabase',
  tableName : 'job',

  attributes: {

    job_title : {
      type: 'string',
      required: true,
      unique: true
    },
    job_description : {
      type: 'string',
      required: true,
      unique: true
    },
    deadline : {
      type: 'datetime',
      required: true,
      unique: true
    },
    num_applicants : {
      type: 'integer',
      required: false,
      unique: false
    }

    }
};
