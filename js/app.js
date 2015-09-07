var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
 myApp.controller('MainController', function($scope, $routeParams, $location){
   
    $scope.$params = $routeParams;
    $location.path('/');
    
  });

myApp.controller('cardController', function($scope) {
    $scope.message = "animation!"
    $scope.pageClass = 'main-card';
});

// about page controller
myApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'about-me';
});
// portfolio page controller
myApp.controller('portfolioController', function($scope) {
    $scope.pageClass = 'my-portfolio';
});

// contact page controller
myApp.controller('contactController', function($scope) {
    $scope.pageClass = 'contact-me';
});
