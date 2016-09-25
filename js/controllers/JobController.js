app.controller('JobController', function($scope,$http,$routeParams) {

$scope.page_title = '';
$scope.BASEURL = "http://localhost:8081";

$scope.getAllTopJobs = function(){

  $http.get($scope.BASEURL+'/top-jobs')
     .success(function (data,status) {
          $scope.topjobs = data;
     });

}

$scope.getSingleJobWithId = function(){

  $scope.jobDetails = { id : $routeParams.job_id };

  $http({
    method  : 'POST',
    url     :  $scope.BASEURL+'/single-job',
    data    : $scope.jobDetails,
    headers : { 'Content-Type': 'application/json' }
   }).success(function (data,status) {
            $scope.single_job = data
   });

}

$scope.getJobsByQuery = function(){
// use referer to navigate check out link of samples
//http://stackoverflow.com/questions/15175429/angularjs-getting-previous-route-path
  $scope.queryData = {
      jobquery :  $scope.jobquery ,
    };
    $http({
    method  : 'POST',
    url     :  $scope.BASEURL+'/search',
    data    : $scope.queryData,
    headers : { 'Content-Type': 'application/json' }
    })
    .success(function(data) {

      if (!data.success) {
          $scope.message = data.message;

      } else {
        // if successful, bind success message to message
        $scope.jobslist = data.data;
        console.log(data)
        $scope.message = data.message;

      }
    });

}



});
