'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('PublicationCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp','$state', function ($rootScope,$scope,$http,$location,ApiServiceOp,$state) {


        ApiServiceOp.getPublications()
            .success(function(response){


                $scope.publications = response;

                console.log($scope.publications);
            }).error(function(){
            console.log("wrong");
            //swal("Oops!", "RElogin", "error");
        });

    }]);
