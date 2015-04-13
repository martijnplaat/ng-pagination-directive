# pagination-directive

This project is an example of a simple pagination directive.

## Getting started

1. Add pagination-directive.html and pagination-directive.js to your Angular project.
2. From the controller where you want to use the pagination directive, initialize the following $scope variables:
 
 This variable defines the maximum number of elements you want to show in the table, which is related to the pagination panel
 - `$scope.maxInList = 10`

 This variable defines the total number of pages in your navigation panel  
 - `$scope.totalNrOfPages = 4`
  
 This variable defines the begin element in the related list of elements. This beginElement changes when you click on
 a new navigation page link from the navigation panel. Technically, the pagination directive calculates the new beginElement
 when a new page is requested and returns the outcome back to the controller scope. In this example project we use the rangeElements function, with the $scope.beginElement variable as argument, to recalculate the list of elements we show in the table.

 - `$scope.beginElement = 0` 
 
 This variable defines the total number of element spanned over all the pages. This total number is based on the length of
 your list of elements.
 - `$scope.totalNrOfElements = $scope.listOfElements.length;`

3. In the view that belongs to the controller, place the pagination directive

<pagination-directive begin-element="beginElement"
    total-nr-of-pages="{{totalNrOfPages}}"
    max-in-list="{{maxInList}}"
    total-nr-of-elements="{{totalNrOfElements}}">
</pagination-directive>

To better understand the implementation of this simple pagination directive check the code of the example project.
