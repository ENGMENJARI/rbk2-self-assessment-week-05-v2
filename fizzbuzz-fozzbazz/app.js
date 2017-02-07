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


.factory('counter', function($rootScope){
  var count=1
  return {
    count
  }
      //declaring the counter in rootScope so all controller can see it
      //counter.count = 0;

      //fizzbuzz function that return result based on result
      var fizzbuzz = function(count){

        if(count % 15 === 0){
          return "fizzbuzz";

        } else if (count % 3 === 0){
          return "fizz";
        } else if (count % 5 === 0){
          return "buzz";
        } else {
          //incase its not divisble by 3 or 5 at all, just a text to click on
          return "click again";
        }
      }

      //fozzbazz function that return result based on result
      var fozzbazz = function(count){
        if(count % 24 === 0 ){
          return "fozzbazz";
        } else if (count % 4 === 0){
          return "fozz";
        } else if (count % 6 === 0){
          return "bazz";
        } else {
          //incase its not divisble by 3 or 5 at all, just a text to click on
          return "click again";
        }
      }

      return {
        fizzbuzz : fizzbuzz,
        fozzbazz : fozzbazz
      }
  })
  .controller('fizzbuzzCtrl', function($scope, $rootScope, counter){

    //just initializing the display variable with some text to click on
    $scope.display = "start";

    //increment function that increase the counter and call the fizzbuzz function
    $scope.increment = function(){

      //using the rootScope counter so its shared between both controllers
      counter.count++;
      console.log(this)
      $scope.display = counter.fizzbuzz(counter.count);

    }

  })
  .controller('fozzbazzCtrl', function($scope, $rootScope, counter){

    //just initializing the display variable with some text to click on
    $scope.display = "start";

    //increment function that increase the counter and call the fizzbuzz function
    $scope.increment = function(){

      //using the rootScope counter so its shared between both controllers
      counter.count++;
      $scope.display = counter.fozzbazz($rootScope.count);

    }
  });

  // .factory('counter', function($scope){
    
  //   var $scope.counter=0;
    
  //   //first Initialize counter with a value of 0
    
  // })
  // ..controller('fizzbuzzCtrl', function ($scope) {
  //   $scope.display = 0;
  //   $scope.counter = 0;
  //   $scope.increment = function () {
  //      console.log('incccccc')
  //      $scope.counter++;
  //     //  $scope.display = Counter.increment($scope.counter);
  //   }
  // })
  //   //if counter accept to be divided on three then I will display fizz
  //   if( $scope.counter%3===0){
  //     redirectTo='/fizzbuzz';
  //   }else if( $scope.counter%5===0){
  //     //If the counter is divisible by five, display BUZZ
  //     redirectTo='BUZZ'
  //   }else if( $scope.counter%15===0){
  //     //if the counter is divisible by both 3 and 5, display FOZZBAZZ
  //     redirectTo='fozzbazz'
  //   }
  // })
  // .controller('fozzbazzCtrl', function(){
  //   //If the counter is divisible by four, display FOZZ
  //   if( $scope.counter%4===0){
  //     redirectTo='FOZZ';
  //   } else if( $scope.counter%5===0){
  //     redirectTo=='BAZZ';
  //     //If the counter is divisible by six, display BAZZ
  //   }else if( $scope.counter%20===0){
  //     redirectTo  :'/fozzbazz'
  //     //If the counter is divisible by both, display FOZZBAZZ
  //   }
  // });
