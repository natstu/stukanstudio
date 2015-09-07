angular.module("myApp")

.config(['$routeProvider', function($routeProvider){

 $routeProvider
   .when('/', {
       templateUrl:"pages/main-card.html",
        controller: 'cardController'

      })
   .when('/skills', {
        templateUrl: 'pages/skills/about-me.html',
        controller: 'aboutController',
        

      })
   .when('/projects', {
        templateUrl: 'pages/projects/my-portfolio.html',
        controller: 'portfolioController',
         
   })
   .when('/contact', {
        templateUrl: 'pages/contact/contact-me.html',
        controller: 'contactController',
        
   })
   .otherwise({
        redirectTo: "pages/main-card.html"
   })

 }]);

 

