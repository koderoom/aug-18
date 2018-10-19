const app=angular.module("app", []);


app.controller("spa", ["$scope", "DATA_SERVICE" , function($scope, DATA_SERVICE){
    $scope.title = "CDACIAN AUGUST";

    $scope.CARD_LIST = DATA_SERVICE.CARD_LIST;
}]);