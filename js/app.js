var app = angular.module('AwesomeJobs', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/_main.html",
        controller : "JobController"
    })
    .when("/register", {
        templateUrl : "partials/_register.html",
          controller : "AuthController"
    })
    .when("/login", {
        templateUrl : "partials/_login.html",
          controller : "AuthController"
    })
    .when("/logout", {
        templateUrl : "partials/_main.html",// after logout go to main
          controller : "AuthController"
    })
    .when("/jobs-portal", {
         templateUrl : "partials/_admin.html",
          controller : "JobController"
    })
    .when("/jobs-search", {
         templateUrl : "partials/_job_search.html",
          controller : "JobController"
    })
    .when("/jobs-applied-for", {
         templateUrl : "partials/_jobs_applied_for.html",
          controller : "JobController"
    })
    .when("/resume-management", {
         templateUrl : "partials/_resume_management.html",
          controller : "JobController"
    })
    .when("/top-jobs", {
         templateUrl : "partials/_top_jobs.html",
          controller : "JobController"
    }).when("/job/:job_id",{
       templateUrl : "partials/_job.html",
       controller : "JobController"
    });
});
