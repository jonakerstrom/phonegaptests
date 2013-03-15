'use strict';

angular.module('angularjsphonegapApp')
.controller('MainCtrl', function ($scope, cordovaReady, gisservice, accelerometer) {
         
            $scope.welcome = "Hej";
            
            $scope.awesomeThings = [
                                    'HTML5 Boilerplate',
                                    'AngularJS',
                                    'Testacular'
                                    ];


            var intervalId = setInterval(function () {
                                         gisservice.getCurrentPosition(function (position) {
                                                                        $scope.position = position;
                                                                        });
                                         
                                         accelerometer.getCurrentAcceleration(function (acceleration) {
                                                                       $scope.acceleration = acceleration;
                                                                       });
                                         
                                         
                                         }, 100);
            
            
            
            $scope.$on('$destroy', function () {
                       clearInterval(intervalId);
                       });
            
          
            });