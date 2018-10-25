const app=angular.module("app", []);

app.filter('unsafe', ["$sce", function($sce) { 
    return $sce.trustAsHtml; 
}]);

app.controller("spa", ["$scope", "$sce", "DATA_SERVICE" , function($scope, $sce, DATA_SERVICE){
    $scope.title = "CDACIAN AUGUST";

    $scope.bgList= [{"ID":1, "BG": "bg-primary"}, {"ID":2, "BG": "bg-danger"}, {"ID":3, "BG": "bg-dark"}];
    $scope.bgRef = $scope.bgList[2];

    $scope.CARD_LIST = DATA_SERVICE.CARD_LIST;


    $scope.uilayout = function(bgRef){
        bgRef = bgRef || $scope.bgList[2];

        $scope.bgRef = bgRef;
    }
}]);



