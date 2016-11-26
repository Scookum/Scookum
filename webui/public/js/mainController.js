//
angular.module('main', ['ngResource']).controller('mainController', MainCtrl);

function MainCtrl($scope, $resource) {
  $scope.drawChart = drawChart;
  $scope.charts = ["activity", "heat"];
  $scope.hosts = ["localhost", "vm-pepper"];
  $scope.chartHost = "";
  $scope.chartSource = "";
  $scope.chart = $scope.charts[0];
  $scope.getHostNames = getHostNames;
  $scope.getSourceNames = getSourceNames;
  $scope.getChart = getChart;
  $scope.resData = $resource('/api/data');
  $scope.resHosts = $resource('/api/hosts');
  $scope.resSources = $resource('/api/hosts/:host_id/sources');
  $scope.resCharts = $resource('/api/hosts/:host_id/sources/:src_id');

  function getHostNames() {
    $scope.resHosts.get({}, function(data) {
      $scope.hosts = data.hosts;
    });
  }
  function getSourceNames() {
    $scope.resSources.get({host_id: $scope.chartHost}, function(data) {
      $scope.charts = data.sources;
    });
  }
  function getChart() {
    $scope.resCharts.get({host_id: $scope.chartHost, src_id: $scope.chartSource}, function(data) {
      drawChart('chartdiv', data);
    });
  };
  
  getHostNames();
  
//  drawChart("chartdiv", {});
}

function Charts() {

}


function drawChart(id, data) {
  var chart = AmCharts.makeChart(id, data);
}
