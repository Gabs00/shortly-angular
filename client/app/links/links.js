angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  //Should have a links property
  $scope.data = {};
  //Should have a data property
  //Should have getLinks property
  console.log('available links ' + Links);
  console.log('scope ', $scope);
  $scope.getLinks = function(){

  };
  //should call get links when the controller is loaded <- links.html
});
