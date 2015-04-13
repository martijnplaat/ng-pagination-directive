'use strict';

/**
 * @ngdoc function
 * @name paginationDirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paginationDirectiveApp
 */
angular.module('paginationDirectiveApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.maxInList = 4;
    $scope.totalNrOfPages = 3;
    $scope.beginElement = 0;
    $scope.listOfElements = [
      { name: 'Martin', age: '33' },
      { name: 'James', age: '56' },
      { name: 'Bill', age: '33' },
      { name: 'George', age: '64' },
      { name: 'June', age: '22' },
      { name: 'Johnny', age: '21' },
      { name: 'Paul', age: '17' },
      { name: 'Joe', age: '89' },
      { name: 'Michael', age: '44' },
      { name: 'Simon', age: '67' },
      { name: 'Sander', age: '29' },
      { name: 'Benny', age: '11' },
      { name: 'Jimmy', age: '2' },
      { name: 'Lars', age: '86' },
      { name: 'Arjen', age: '48' },
      { name: 'Tim', age: '31' },
      { name: 'Isaac', age: '90' }
    ];

    $scope.totalNrOfElements = $scope.listOfElements.length;

		$scope.rangeElements = function(begin) {

        console.log("nu wel dus");

		    var newListOfElements = [];
		    var tmpMaxInList = $scope.maxInList;

		    if($scope.totalNrOfElements > 0) {

		        if(($scope.totalNrOfElements - begin) < $scope.maxInList ) {
		            tmpMaxInList = ($scope.totalNrOfElements - begin);
		        }

		        for(var i=0; i < tmpMaxInList; i++) {

		            if(i == 0) newListOfElements.push($scope.listOfElements[begin]);
		            else newListOfElements.push($scope.listOfElements[begin+i]);
		        }
		    }

		    return newListOfElements;
		};

  });
