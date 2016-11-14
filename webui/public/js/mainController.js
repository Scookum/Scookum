//
angular.module('main', []).controller('mainController', MainCtrl);

function MainCtrl($scope) {
  $scope.submit = function() {
    console.log('submit:' + $scope.userName + ":" + $scope.password);
  };
}
