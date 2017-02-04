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

  .factory('counter', function(){
    
    var counter=0;
    
    //first Initialize counter with a value of 0
    
  })
  .controller('fizzbuzzCtrl', function(){
    //define a method to handle counter
   var increase=function(){
      counter++

    }
    //if counter accept to be divided on three then I will display fizz
    if(counter%3===0){
      redirectTo='fizzbuzz';
    }else if(counter%5===0){
      //If the counter is divisible by five, display BUZZ
      redirectTo='fozzbazz'
    }else if(counter%15===0){
      //if the counter is divisible by both 3 and 5, display FOZZBAZZ
      redirectTo='fozzbazz'
    }
  })
  .controller('fozzbazzCtrl', function(){
    //If the counter is divisible by four, display FOZZ
    if(counter%4===0){
      redirectTo='fozzbazz';
    } else if(counter%5===0){
      redirectTo=='fozzbazz';
      //If the counter is divisible by six, display BAZZ
    }else if(counter%20===0){
      redirectTo  :'fozzbazz'
      //If the counter is divisible by both, display FOZZBAZZ
    }
  });
