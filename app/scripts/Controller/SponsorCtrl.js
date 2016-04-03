
'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('SponsorCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {


        ApiServiceOp.getSponsors()
            .success(function(response){


                $scope.sponsors = response;

                console.log($scope.sponsors);
            }).error(function(){
            console.log("wrong");
            //swal("Oops!", "RElogin", "error");
        });

    }]);
