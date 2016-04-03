'use strict';

/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */

//
angular.module('MMADApp')
    .controller('CommiteeCtrl',['$rootScope','$scope','$http','$location','ApiServiceOp', function ($rootScope,$scope,$http,$location,ApiServiceOp) {


        ApiServiceOp.getCommiteeMembers()
            .success(function (response) {

                $scope.commitee_details = response;
                console.log($scope.commitee_details);
            }).
        error(function () {
            console.log("wrong");
            //swal("Oops!", "RElogin", "error");
        });


}]);
