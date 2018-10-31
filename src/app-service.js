var appModule=angular.module("app");

appModule.service("DATA_SERVICE", [function(){

    const BASE_URL_DEMO = `https://koderoom.github.io/aug-18-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-18-webdemo`;
    const CARD_LIST = [];
    
    // DAY - 9
    const cardDay9 = {
        "ID" : 9,
        "TITLE" : "DAY 9",
        "HEADING" : "Lets make website",
        "DESC" : `Create multiple html pages, and link using anchor tags. Navigation revision and debugging.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Static website with multiple pages", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day9/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day9/home.html`,
            }
        ]
    };
    CARD_LIST.push(cardDay9);


    // DAY - 8
    const cardDay8 = {
        "ID" : 8,
        "TITLE" : "DAY 8",
        "HEADING" : "lets chat",
        "DESC" : `lets chat design layout and simulation`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "lets chat design layout and simulation", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day8/chat.html`,
            }
        ]
    };
    CARD_LIST.push(cardDay8);

    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "DAY 7",
        "HEADING" : "Dynamic blocks",
        "DESC" : `Create dynamic blocks. An option to post text and upload image on wall. The post has an option for like, dislike and comment.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Post Text Demo", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day7/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day7/1.html`,
            },

            {  
                "ID":2, "TITLE": "Post Text & Upload Image, with Animation (animate.css)", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day7/2.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day7/2.html`,
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
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/5.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day6/5.html`,
            },

            {  
                "ID":2, "TITLE": "Create Dynamic Block, Ref Block is <mark>invisible</mark>.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/6.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day6/6.html`,
            },

            {  
                "ID":3, "TITLE": "Create Dynamic Block, Anmiation applied.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/7.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day6/7.html`,
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
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/1.html`,
            },

            {  
                "ID":2, "TITLE": "setInterval() basic example.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/2.html`,
            },

            {  
                "ID":3, "TITLE": "setInterval() basic, change background.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/3.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/3.html`,
            },

            {  
                "ID":4, "TITLE": "setInterval() basic, change background every second", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/4.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/4.html`,
            },

            {  
                "ID":5, "TITLE": "Counter Example", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/6.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/6.html`,
            },

            {  
                "ID":6, "TITLE": "Timer Example", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/7.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/7.html`,
            },

            {  
                "ID":7, "TITLE": "Bootstrap Layout Example", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/9.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/9.html`,
            },

            {  
                "ID":8, "TITLE": "Dynamic blocks with setInterval()", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/10.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day5/10.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay5);



    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "TITLE" : "DAY 4",
        "HEADING" : "Dynamic blocks",
        "DESC" : `UI Design with Bootstrap.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "3*3 equal height width design with bootstrap.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day4/1.html`,
            },

            {  
                "ID":2, "TITLE": "Colorful background, 3*3 equal height width design with bootstrap", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day4/2.html`,
            },

            {  
                "ID":3, "TITLE": "<mark>Character Entities</mark>, 3*3 equal height width design with bootstrap", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/3.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day4/3.html`,
            },

        ]
    };
    CARD_LIST.push(cardDay4);



    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "DAY 3",
        "HEADING" : "Dynamic blocks",
        "DESC" : `CSS Rules, Element Selector, ID Selector and Class Selector Rule`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "CSS ID Selector Rule Example", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day3/1.html`,
            },

            {  
                "ID":2, "TITLE": "CSS ID Selector and Class Selector Rule Example", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/2.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day3/2.html`,
            },

            {  
                "ID":3, "TITLE": "CSS ID, Class rule with CSS Flex", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/4.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day3/4.html`,
            },

            {  
                "ID":4, "TITLE": "Google home page design with CSS", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/5.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day3/5.html`,
            },

            {  
                "ID":5, "TITLE": "Page heading deisgn with CSS", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/6.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day3/6.html`,
            }
        ]
    };
    CARD_LIST.push(cardDay3);



    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "Dynamic blocks",
        "DESC" : `CSS Properties border, margin, padding`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "CSS Eelement Rule (Internal CSS Style)", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/1.html`,
            },
            {  
                "ID":2, "TITLE": "CSS Inline Style", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/2.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/2.html`,
            },
            {  
                "ID":3, "TITLE": "CSS Property - height and border-radius", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/3.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/3.html`,
            },

            {  
                "ID":4, "TITLE": "CSS Property - Overflow and scroll", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/4.html`,
            },

            {  
                "ID":5, "TITLE": "CSS Flexbox - Vertical division[2] of screen.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/5.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/5.html`,
            },

            {  
                "ID":6, "TITLE": "CSS Flexbox - Horizontal and Vertical division[2] of screen.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/6.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/6.html`,
            },

            {  
                "ID":7, "TITLE": "CSS Flexbox - Horizontal and Vertical division [3] of screen", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/7.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/7.html`,
            },

            {  
                "ID":8, "TITLE": "CSS Flexbox - justify-content, align-items property", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/8.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/8.html`,
            },

            {  
                "ID":9, "TITLE": "CSS Flexbox - center align text", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/9.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/9.html`,
            },

            {  
                "ID":10, "TITLE": "CSS Flexbox - center align image", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/10.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day2/10.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay2);


    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Dynamic blocks",
        "DESC" : `HTML Fundamentals and basic tags`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello World", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/1.html`,
            },

            {  
                "ID":2, "TITLE": "Heading Tags", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/3.html`,
            },

            {  
                "ID":3, "TITLE": "Styling Heading Tags", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/4.html`,
            },

            {  
                "ID":4, "TITLE": "Division Tag and CSS height property", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/5.html`,
            },

            {  
                "ID":5, "TITLE": "Image tag", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/7.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/7.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay1);


    this.CARD_LIST = CARD_LIST;

}]);