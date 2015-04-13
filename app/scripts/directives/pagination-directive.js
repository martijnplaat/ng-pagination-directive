angular.module('custom-directives.pagination', [

])

    /*
        maxInList           : Maximum number of elements in the table which are related to the navigation panel
        totalNrOfPages      : Total number of pages you want to show in your navigation panel
        totalNrOfElement    : Total number of elements which are subdivided into pages by the navigation panel
        beginElement        : Yhe current begin element in the table.
                              This begin element dynamically changes when the user clicks on a new page in the navigation panel
     */

    .directive('paginationDirective', function() {

        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                maxInList: '@',
                totalNrOfPages: '@',
                totalNrOfElements: '@',
                beginElement: '='
            },
            templateUrl: 'scripts/directives/pagination-directive.html',
            link: function(scope, elem, attrs) {

                var currentPage = 1;
                scope.beginPage = 1;

                var totalNumberOfPages = function() {

                    var numberOfCases = scope.totalNrOfElements;
                    var numberOfPages;

                    if(numberOfCases < parseInt(scope.maxInList)) { numberOfPages = 1; }
                    else {
                        numberOfPages = Math.round(numberOfCases)/parseInt(scope.maxInList);
                        var restPage = numberOfCases % parseInt(scope.maxInList);
                        if(restPage > 0) numberOfPages = numberOfPages+1;
                    }

                    return numberOfPages;
                };

                scope.rangeNavigation = function(min){

                    var max = min + parseInt(scope.totalNrOfPages);

                    var step = 1;
                    var input = [];
                    for (var i = min; i <= max; i += step) input.push(i);

                    return input;
                };

                scope.previous = function() {

                    if(currentPage > 1) {
                        currentPage = currentPage - 1;
                    }

                    if(currentPage <= scope.beginPage) {
                        scope.beginPage = currentPage;
                    }

                    if( currentPage > 1) {
                        scope.beginElement = (scope.beginElement - parseInt(scope.maxInList));
                    } else {
                        scope.beginElement = 0;
                    }

                };

                scope.next = function() {

                    if((currentPage <= (scope.beginPage+parseInt(scope.totalNrOfPages))) && ( (currentPage + 1) <= totalNumberOfPages() ) ) {
                        currentPage = currentPage + 1;
                    }

                    if((currentPage > (scope.beginPage+parseInt(scope.totalNrOfPages))) && ((currentPage) <= totalNumberOfPages())  ) {
                        scope.beginPage = scope.beginPage + 1;
                    }

                    if( (scope.totalNrOfElements - scope.beginElement) > parseInt(scope.maxInList) ) {
                        scope.beginElement = (scope.beginElement+parseInt(scope.maxInList));
                    }

                };

                scope.whichClass = function(curPage) {
                    if(curPage == currentPage) return "highlight-pagination";
                    else return "";
                };

                scope.setNewPage = function(newPage) {
                    currentPage = newPage;
                    scope.beginElement = ((currentPage-1)*parseInt(scope.maxInList));
                };


            }
        }

    })


;
