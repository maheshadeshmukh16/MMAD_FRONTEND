'use strict';

var ApiService = angular.module('ApiService', []);
ApiService.factory('ApiServiceOp', ['$http', function($http){

    // var urlBase = 'http://52.77.30.40/MMAD/backend/backend/web/v1';
    var urlBase = 'http://52.77.44.104/pranavproject/backend/web/v1'

    var ApiServiceOp = {};

    ApiServiceOp.signIn = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/adminsignin',
            data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    ApiServiceOp.getEvents = function(){
        return $http({
            method: 'POST',
            url: urlBase + '/getevents',
            //data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    ApiServiceOp.addEvent = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/createevent',
            data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    ApiServiceOp.getLinks = function(){
        return $http({
            method: 'POST',
            url: urlBase + '/getlinks',
            //data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    ApiServiceOp.addLink = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/createlink',
            data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
    };


    ApiServiceOp.uploadGalleryImage = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/addgalleryimage',
            data:data,
            headers:{'Content-Type' : undefined }
        });
    };



    ApiServiceOp.getGalleryImages = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/getimagesforevent',
            data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    ApiServiceOp.addCommitee = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/createcommiteemember',
            data: data,
            headers:{'Content-Type' : undefined }

        });
    };


    ApiServiceOp.getCommiteeMembers = function(){
        return $http({
            method: 'POST',
            url: urlBase + '/getcommiteemembers',
            //data: data,
            headers:{'Content-Type' : 'application/x-www-form-urlencoded' }

        });
    };

    ApiServiceOp.addfeedback = function(data){
        return $http({
            method: 'POST',
            url: urlBase + '/createfeedback',
            data: $.param(data),
            headers:{'Content-Type' : 'application/x-www-form-urlencoded' }
        })
    };

    ApiServiceOp.getPublications = function(){
        return $http({
            method: 'POST',
            url: urlBase + '/getpublications',
            //data: data,
            headers:{'Content-Type' : 'application/x-www-form-urlencoded' }

        });
    };

    ApiServiceOp.getSponsors = function(){
        return $http({
            method: 'POST',
            url: urlBase + '/getsponsors',
            //data: data,
            headers:{'Content-Type' : 'application/x-www-form-urlencoded' }

        });
    };

    ApiServiceOp.getAllGalleryImages = function(){
        return $http({
            method: 'GET',
            url: urlBase + '/getallgalleryimages',
            // data: $.param(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };


    return ApiServiceOp;
}
]);
