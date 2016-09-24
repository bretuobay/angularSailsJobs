app.controller('AuthController', function($scope,$http,$location) {

$scope.page_title = '';
$scope.username= "Demo User";

 $scope.registrationData = {};

 $scope.BASEURL = "http://localhost:8081"

  $scope.registerUser = function() {
    $scope.registrationData = {
      username :  $scope.username,
      email :  $scope.email ,
      password :  $scope.password,
      confirm_password :  $scope.confirm_password
    };

  $http({
  method  : 'POST',
  url     :  $scope.BASEURL+'/registration',
  data    : $scope.registratioData,  // pass in data as strings
  headers : { 'Content-Type': 'application/json' }
 })
  .success(function(data) {

    if (!data.success) {
     $scope.message = data.message;

    } else {
      // if successful, bind success message to message
      $scope.message = data.message;
      $location.path('/login');
    }
  });

};


$scope.loginUser = function() {
  $scope.loginData = {
    email :  $scope.email ,
    password :  $scope.password
    };
    $http({
    method  : 'POST',
    url     :  $scope.BASEURL+'/authentication',
    data    : $scope.loginData,
    headers : { 'Content-Type': 'application/json' }
    })
    .success(function(data) {

      if (!data.success) {
          $scope.message = data.message;

      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
        $location.path("/jobs-portal");
      }
    });

};

$scope.logoutUser = function(){
  // pay a visit to server to destroy session

  $http({
  method  : 'POST',
  url     :  $scope.BASEURL+'/logout',
  data    : $scope.loginData,
  headers : { 'Content-Type': 'application/json' }
  })
  .success(function(data) {
      $location.path("/");
  });


};


});
