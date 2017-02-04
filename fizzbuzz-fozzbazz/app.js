angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    var area={}
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
    var area={}
    area.counter=0
    area.display=''
    //first Initialize counter with a value of 0
    
  })
  .controller('fizzbuzzCtrl', function(){
    //define a method to handle counter
    area.increase=function(){
      area.counter++

    }
    //if counter accept to be divided on three then I will display fizz
    if(area.counter%3===0){
      area.display='fizz';
    }else if(area.counter%5===0){
      //If the counter is divisible by five, display BUZZ
      area.display='BUZZ'
    }else if(area.counter%15===0){
      //if the counter is divisible by both 3 and 5, display FOZZBAZZ
      area.display='FOZZBAZZ'
    }
  })
  .controller('fozzbazzCtrl', function(){
    //If the counter is divisible by four, display FOZZ
    if(area.counter%4===0){
      area.display='FOZZ';
    } else if(area.counter%5===0){
      area.display='BAZZ';
      //If the counter is divisible by six, display BAZZ
    }else if(area.counter%20===0){
      redirectTo  :'FOZZBAZZ'
      //If the counter is divisible by both, display FOZZBAZZ
    }
  });
