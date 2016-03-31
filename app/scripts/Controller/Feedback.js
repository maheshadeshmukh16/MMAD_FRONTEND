'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('FeedbackCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {


        ApiServiceOp.getFeedback().success(function(response){

            console.log(response);
            $scope.feedback_details = response;
            //console.log($scope.feedback_details);
        }).error(function(){
            console.log("wrong");
            //swal("Oops!", "RElogin", "error");
        });



    }]);
