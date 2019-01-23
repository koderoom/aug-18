import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-18-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-18-webdemo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

    // DAY - 20
    const cardDay20 = {
        "ID" : 20,
        "TITLE" : "Project Reference - 20 | Angular Ajax Client - Places Example",
        "HEADING" : "Integrating Angular and Spring Project using Ajax",
        "DESC" : `Integrating Angular and Spring Project using Ajax`,

        "DEMO_LIST" : [
            {
                "ID":1, "TITLE": "Angular Ajax Client - Places Example", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-ajax-client`,
            }
        ]
    };
    CARD_LIST.push(cardDay20);

    // DAY - 19
    const cardDay19 = {
        "ID" : 19,
        "TITLE" : "Project Reference - 19 | Integrating Angular and Spring Project using Ajax",
        "HEADING" : "Integrating Angular and Spring Project using Ajax",
        "DESC" : `Integrating Angular and Spring Project using Ajax`,

        "DEMO_LIST" : [
            {
                "ID":1, "TITLE": "How to download and import #spring project from #github in #Eclipse.", 
                "YOUTUBE_LINK" : `https://youtu.be/Tt_Znbg0QUc`,
            },
            {
                "ID":2, "TITLE": "How to download and import #Angular project from #Github in #VSCODE.", 
                "YOUTUBE_LINK" : `https://youtu.be/oh4mnlM_eYA`,
            },
            {
                "ID":2, "TITLE": "Integrating  #ANGULAR and #SPRING project using #AJAX.", 
                "YOUTUBE_LINK" : `https://youtu.be/uRDHtEqpBCA`,
            },
        ]
    };
    CARD_LIST.push(cardDay19);


    // DAY - 18
    const cardDay18 = {
        "ID" : 17,
        "TITLE" : "Project Reference - 18 | Angular Ajax | Integration with backend API",
        "HEADING" : "Ajax Request using Angular | Integration with backend API",
        "DESC" : `Ajax Request using Angular | Integration with backend API`,

        "DEMO_LIST" : [
            {
                "ID":1, "TITLE": "Ajax Request using Angular | Integration with backend API", 
                "SOURCE_LINK" : `https://github.com/junkbin/AngularAjax`,
            },
        ]
    };
    CARD_LIST.push(cardDay18);


    // DAY - 17
    const cardDay17 = {
        "ID" : 17,
        "TITLE" : "Project Reference - 17 | Spring MVC | Building RESTful API",
        "HEADING" : "A day with Backend programming using SPRING MVC | Building RESTful API",
        "DESC" : `Backend programming using SPRING MVC | Building RESTful API`,

        "DEMO_LIST" : [
            {
                "ID":0, "TITLE": "Backend programming using SPRING MVC | Building RESTful API", 
                "SOURCE_LINK" : `https://github.com/koderoom/augspring/tree/master/demoapp`,
            },
            {
                "ID":1, "TITLE": "1. Create and Run #DynamicWebProject in #Eclipse using #tomcat.", 
                "YOUTUBE_LINK" : `https://youtu.be/HsYvNa2nkY4`,
            },
            {
                "ID":2, "TITLE": "2. Convert #DynamicWebProject to #Maven Project and Add #Spring core dependencies in #Eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/K4BXPxOZZ3k`,
            },
            {
                "ID":3, "TITLE": "3. Add Spring MVC dependencies using maven in eclipse.", 
                "YOUTUBE_LINK" : `https://youtu.be/Nmji5SF0qyQ`,
            },
            {
                "ID":4, "TITLE": "4. Configuration file web.xml and spring-servlet.xml. | How to update config files for spring mvc?", 
                "YOUTUBE_LINK" : `https://youtu.be/kZGcdn5KrRY`,
            },
            {
                "ID":5, "TITLE": "5. Spring configuration update | Add annotation support in spring-servlet.xml", 
                "YOUTUBE_LINK" : `https://youtu.be/PF1WJj0FE1s`,
            },
            {
                "ID":6, "TITLE": "6. Write and run first #Spring #REST API | Hello Spring REST API.", 
                "YOUTUBE_LINK" : `https://youtu.be/saYdz0CORec`,
            },
            {
                "ID":7, "TITLE": "7  Resolve View in MVC using RestController Annotation", 
                "YOUTUBE_LINK" : `6. Write and run first #Spring #REST API | Hello Spring REST API.`,
            },
            {
                "ID":8, "TITLE": "8. Building REST GET API | Basic concept step by step.", 
                "YOUTUBE_LINK" : `https://youtu.be/odIhv8HcQrw`,
            },
            {
                "ID":9, "TITLE": "9. Building REST POST API | Basic concept step by step.", 
                "YOUTUBE_LINK" : `https://youtu.be/iRZ7wmfqyoA`,
            },
        ]
    };
    CARD_LIST.push(cardDay17);

    // DAY - 16
    const cardDay16 = {
        "ID" : 16,
        "TITLE" : "DAY 16",
        "HEADING" : "Single Page Application with Angular",
        "DESC" : `Single Page Application with Angular`,

        "DEMO_LIST" : [
            {
                "ID":1, "TITLE": "Single Page Application with Angular", 
                "DEMO_LINK" : `https://koderoom.github.io/hello-angular/`,
                "SOURCE_LINK" : `https://github.com/koderoom/hello-angular/tree/master/src/app`,
            },
        ]
    };
    CARD_LIST.push(cardDay16);

    // DAY - 15
    const cardDay15 = {
        "ID" : 15,
        "TITLE" : "DAY 15",
        "HEADING" : "Hello Angular Concept, Setup and Simulation",
        "DESC" : `Hello Angular Concept, Setup and Simulation`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello Angular Concept, Setup and Simulation", 
                "DEMO_LINK" : `https://koderoom.github.io/hello-angular/`,
                "SOURCE_LINK" : `https://github.com/koderoom/hello-angular/tree/master/src/app`,
            },
        ]
    };
    CARD_LIST.push(cardDay15);

    
    // DAY - 12
    const cardDay12 = {
        "ID" : 12,
        "TITLE" : "DAY 12",
        "HEADING" : "Ajax Request, Lets make Weather Application",
        "DESC" : `Ajax Request, Lets make Weather Application`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Ajax Request, Lets make Weather Application", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day12/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day12/1.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay12);

    // DAY - 11
    const cardDay11 = {
        "ID" : 11,
        "TITLE" : "DAY 11",
        "HEADING" : `Lets add Home page to static website.`,
        "DESC" : `Lets add Home page to static website.`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Lets add Home page to static website.", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day11/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day11/home.html`,
            },
        ]
    };
    CARD_LIST.push(cardDay11);

    // DAY - 10
    const cardDay10 = {
        "ID" : 10,
        "TITLE" : "DAY 10",
        "HEADING" : "Advance Javascript",
        "DESC" : `Advance Javascript`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Basic Javascript Functions", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/1.js`,
            },

            {  
                "ID":2, "TITLE": "Annonymous Javascript Functions", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/2.js`,
            },

            {  
                "ID":3, "TITLE": "Annonymous Javascript Functions - Callback", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/3.js`,
            },

            {  
                "ID":4, "TITLE": "Javscript statment", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/4.js`,
            },

            {  
                "ID":5, "TITLE": "Javscript Lamda Expression", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/5.js`,
            },

            {  
                "ID":6, "TITLE": "Javscript Lamda Expression - Callback", 
                // "DEMO_LINK" : `${BASE_URL_DEMO}/day10/home.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day10/6.js`,
            }
        ]
    };
    CARD_LIST.push(cardDay10);


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


    /** FEATURED LIST */
    const featured6 = {
        "ID" : 6,
        "TITLE" : "Ludo Game Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/ludo/ludo-game-simulation.html`
    };
    FEATURED_LIST.push(featured6);

    const featured4= {
        "ID" : 4,
        "TITLE" : "Weather App Extended",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/featured/weather-app.html`
    };
    FEATURED_LIST.push(featured4);

    const featured3= {
        "ID" : 3,
        "TITLE" : "Weather App",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day12/1.html`
    };
    FEATURED_LIST.push(featured3);

    const featured2= {
        "ID" : 2,
        "TITLE" : "Web whatsapp simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat-with-emojis.html`
    };
    FEATURED_LIST.push(featured2);

    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    FEATURED_LIST.push(featured1);

    const featured5= {
        "ID" : 5,
        "TITLE" : "Project Static Website",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day11/home.html`
    };
    FEATURED_LIST.push(featured5);


    /** FEATURE LIST ANGULAR */
    const featuredAngular1= {
        "ID" : 5,
        "TITLE" : "SPA using Angular",
        "SHOW" : true,
        "DEMO_LINK" : `https://koderoom.github.io/hello-angular/`
    };
    FEATURED_ANGULAR_LIST.push(featuredAngular1);



    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
