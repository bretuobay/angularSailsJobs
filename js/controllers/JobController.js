app.controller('JobController', function($scope,$http) {

$scope.page_title = '';
$scope.BASEURL = "http://localhost:8081";

//$scope.populateTopJobs = function(){
  $http.get($scope.BASEURL+'/top-jobs')
     .success(function (data,status) {
          $scope.topjobs = data;
     });
//}


});
