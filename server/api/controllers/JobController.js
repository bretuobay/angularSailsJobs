/**
 * JobController
 *
 * @description :: Server-side logic for managing Jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

jobSubmission : function(req,res,next){

	var job_data = {
		job_title: req.param('job_title'),
		job_description: req.param('job_description'),
		deadline: req.param('deadline')
	};

	Job.create(job_data, function jobCreated(err, job) {

	if (err) {

		console.log(err);

		 res.json({
			success: false,
			message : 'New job was NOT submitted successfully!',
			data : err
		});

		}else{

      res.json({
 			success: true,
 			message : 'New job was submitted successfully!',
 			data : {}
 		});
	}

	});
},

getAllJobs : function(req,res,next){

	Job.find(function foundJobs(err, jobs) {
		 if (err) return next(err);
		 //console.log(jobs)
		 return res.json({jobs});

});

},

getAllTopJobs : function(req,res,next){

  Job.find({num_applicants:{'>=':10}}).exec(function (err, topjobs){

  if (err) {
     return next(err);
  }

  return res.json(topjobs);

});
},

getSingleJobWithId : function(req,res,next){
  Job.findOne({
  id:req.param('id')
	}).exec(function (err, job){

  if (err) {
     return next(err);
  }

  return res.json(job);

});
},

getJobsByQuery : function(req,res,next){

	var query = req.param('jobquery');

	Job.find({
  job_title : {
    'contains' : query
  }
}).exec(function (err, jobs){

  if (err) {
     return next(err);
  }

  return res.json({
		data : jobs,
		success: true
	});

 });


}




};
