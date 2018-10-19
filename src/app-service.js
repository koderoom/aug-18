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

    

    // DAY - 5
    const cardDay5 = {
        "ID" : 5,
        "TITLE" : "DAY 5",
        "HEADING" : "Dynamic blocks",
        "DESC" : `CSS Combinator rule and fundamentals of javascript.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "CSS Combinator Rule example.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/1.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/1.html`,
            },

            {  
                "ID":2, "TITLE": "setInterval() basic example.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/2.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/2.html`,
            },

            {  
                "ID":3, "TITLE": "setInterval() basic, change background.", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/3.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/3.html`,
            },

            {  
                "ID":4, "TITLE": "setInterval() basic, change background every second", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/4.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/4.html`,
            },

            {  
                "ID":5, "TITLE": "Counter Example", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/6.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/6.html`,
            },

            {  
                "ID":6, "TITLE": "Timer Example", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/7.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/7.html`,
            },

            {  
                "ID":7, "TITLE": "Bootstrap Layout Example", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/9.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/9.html`,
            },

            {  
                "ID":7, "TITLE": "Dynamic blocks with setInterval()", 
                "DEMO_LINK" : `https://aug-18.github.io/dacdemo/day5/10.html`,
                "SOURCE_LINK" : `https://github.com/aug-18/dacdemo/blob/master/day5/10.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay5);


    this.CARD_LIST = CARD_LIST;

}]);