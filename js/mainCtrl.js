var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){

$scope.order = "createdAt";

  $scope.postData = function(message){
    parseService.postData(message).then(function(data){
      $scope.message = "";
    }, function(error){
      alert("BORKEN!!!");
    });
  };

  $scope.getParseData = function(){
    parseService.getData().then(function(data){
      console.log(data.data.results);
      $scope.messages = data.data.results;
    });
  };

  setInterval($scope.getParseData, 1000);

});
