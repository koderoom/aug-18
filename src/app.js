const app=angular.module("app", []);

app.filter('unsafe', ["$sce", function($sce) { 
    return $sce.trustAsHtml; 
}]);

app.controller("spa", ["$scope", "$sce", "DATA_SERVICE" , function($scope, $sce, DATA_SERVICE){
    $scope.title = "CDACIAN AUGUST";

    $scope.CARD_LIST = DATA_SERVICE.CARD_LIST;
    
}]);



