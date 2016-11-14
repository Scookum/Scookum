//
angular.module('login', []).controller('loginCtrl', LoginCtrl);

function LoginCtrl($scope) {
  $scope.submit = function() {
    console.log('submit:' + $scope.userName + ":" + $scope.password);
  };
}
