var appModule=angular.module("app");

appModule.service("DATA_SERVICE", [function(){

    const CARD_LIST = [];
    
    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "DAY 7",
        "HEADING" : "Dynamic blocks",
        "DESC" : `Create dynamic blocks. An option to post text and upload image on wall. The post has an option for like, dislike and comment.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Post Text Demo", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day7/1.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day7/1.html`,
            },

            {  
                "ID":2, "TITLE": "Post Text & Upload Image, with Animation (animate.css)", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day7/2.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day7/2.html`,
            }
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "TITLE" : "DAY 6",
        "HEADING" : "Dynamic blocks",
        "DESC" : `Create dynamic blocks using <mark>document</mark> object. An option to capture user input and update the dynamic block.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Create Dynamic Block, Ref Block is <mark>visible</mark>.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day6/5.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day6/5.html`,
            },

            {  
                "ID":2, "TITLE": "Create Dynamic Block, Ref Block is <mark>invisible</mark>.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day6/6.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day6/6.html`,
            },

            {  
                "ID":3, "TITLE": "Create Dynamic Block, Anmiation applied.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day6/7.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day6/7.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay6);

    


    this.CARD_LIST = CARD_LIST;

}]);