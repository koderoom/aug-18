const app=angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            "templateUrl": 'home.html',
            "controller" : "home"
        }).
        
        when('/dacexam/', {
            templateUrl: 'dacexam.html',
            "controller" : "dacexam"
        }).
        
        otherwise('/');
}]);

app.filter('unsafe', ["$sce", function($sce) { 
    return $sce.trustAsHtml; 
}]);

app.controller("home", ["$scope", "$sce", "DATA_SERVICE" , function($scope, $sce, DATA_SERVICE){
    let title = "AUG-18";
    let bgList= [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, {"ID":3, "BG": "bg-info", "BTN":"btn-info"}];
    let randomIndex = Math.floor((Math.random() * 4));

    $scope.init = (function(){
        $scope.title = title;
        $scope.bgList = bgList;    

        $scope.bgRef = bgList[randomIndex];

        // CARD DATA
        $scope.CARD_LIST = DATA_SERVICE.CARD_LIST;

        $scope.FEATURED_LIST = DATA_SERVICE.FEATURED_LIST;

        $scope.FEATURED_ANGULAR_LIST = DATA_SERVICE.FEATURED_ANGULAR_LIST;
    })();

    
    $scope.uilayout = function(bgRef){
        bgRef = bgRef || bgList[randomIndex];

        $scope.bgRef = bgRef;
    }
}]);



app.controller("dacexam", ["$scope", "$sce", "DATA_SERVICE", "DATA_SERVICE_EXAM" , function($scope, $sce, DATA_SERVICE, DATA_SERVICE_EXAM){
    let title = "AUG-18";
    let bgList= [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, {"ID":3, "BG": "bg-info", "BTN":"btn-info"}];
    let randomIndex = Math.floor((Math.random() * 4));

    $scope.init = (function(){
        $scope.title = title;
        $scope.bgList = bgList;    

        $scope.bgRef = bgList[randomIndex];

        // CARD DATA
        $scope.EXAM_LIST = DATA_SERVICE_EXAM.EXAM_LIST;
    })();

    
    $scope.uilayout = function(bgRef){
        bgRef = bgRef || bgList[randomIndex];

        $scope.bgRef = bgRef;
    }
}]);


