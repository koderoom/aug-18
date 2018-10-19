var appModule=angular.module("app");

appModule.service("DATA_SERVICE", [function(){

    const CARD_LIST = [];
    
    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "DAY 7",
        "HEADING" : "Dynamic blocks",
        "DESC" : "Posting text and Image Upload with an option to like, dislike and comment.",
    };
    CARD_LIST.push(cardDay7);

    


    this.CARD_LIST = CARD_LIST;

}]);