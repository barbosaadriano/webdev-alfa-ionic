(function() {
var app =angular.module('starter', ['ionic'])

app.controller('imcCtrl',function($scope){

   $scope.altura = 1.70;
   $scope.peso = 80;
   $scope.imc = 20;

   $scope.status="Gordo";


});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}());