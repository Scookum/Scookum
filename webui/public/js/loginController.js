//
angular.module('login', []).controller('loginController', LoginCtrl);

function LoginCtrl($scope) {
  $scope.submit = function() {
    console.log('submit:' + $scope.userName + ":" + $scope.password);
  };
}
