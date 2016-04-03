'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('FeedbackCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {

        $scope.addFeedback = function(data) {

            ApiServiceOp.addfeedback(data)
                .success(function (response) {

                    swal("Good job!", "Your valuable feedback is submited!", "success");
                    
                }).error(function () {
                //console.log("wrong");
                swal("Oops!", "Reenter the feedback", "error");
            });
        }
    }]);
