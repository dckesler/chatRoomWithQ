var app = angular.module('chatroom');

app.service('parseService', function($http, $q){
  this.postData = function(message){
    return $http.post("https://api.parse.com/1/classes/chat", {text: message})
  };

  this.getData = function(){
    var dfd = $q.defer();
    console.log(dfd);
    $http({
      method: "GET",
      url: "https://api.parse.com/1/classes/chat"
    }).then(function(x){
      dfd.resolve(x);
    });
    return dfd.promise;
  };
});
