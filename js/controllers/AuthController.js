app.controller('AuthController', function($scope,$http,$location) {
$scope.register = {}
$scope.page_title = '';
$scope.register.username= "Demo User";

 $scope.registrationData = {};

 $scope.BASEURL = "http://localhost:8081";// set deployment base url for the sails server

  $scope.registerUser = function() {
    $scope.registrationData = {
      "username" :  $scope.register.username,
      "email" :  $scope.register.email ,
      "password" :  $scope.register.password,
      "confirm_password" :  $scope.register.confirm_password
    };
    console.log($scope.registrationData)

  $http({
  method  : 'POST',
  url     :  $scope.BASEURL+'/registration',
  data    : $scope.registrationData,  // pass in data as strings
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

};//end of registration


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

};// end of login

$scope.logoutUser = function(){
  // pay a visit to server to destroy session

  $http({
  method  : 'POST',
  url     :  $scope.BASEURL+'/logout',
  data    : $scope.loginData,
  headers : { 'Content-Type': 'application/json' }
  })
  .success(function(data) {
      $location.path("/");// visit home no matter what
  });


};// end of logout


});
