angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($routeProvider){
    //first Initialize counter with a value of 0
    var counter=0
  })
  .controller('fizzbuzzCtrl', function('counter'){
    //if counter accept to be divided on three then I will display fizz
    if(counter%3===0){
      redirectTo:'/fizzbuzz'
    }else if(counter%5===0){
      //If the counter is divisible by five, display BUZZ
      redirectTo:'/BUZZ'
    }else if(counter%3===0 & counter%5===0){
      //if the counter is divisible by both 3 and 5, display FOZZBAZZ
      redirectTo: '/fozzbazz'
    }
  })
  .controller('fozzbazzCtrl', function(){});
