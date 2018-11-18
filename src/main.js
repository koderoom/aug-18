let test = function(){
    // 180840320001
    const prefix = "180840320";

    let finalJson = [];
    for(let i=1; i<=128; i++) {

        let rollid = "";
        
        if(i < 10){
            rollid = `${prefix}00${i}`;
        } else if(i<100){
            rollid = `${prefix}0${i}`;
        } else {
            rollid = `${prefix}${i}`;
        }

        let refJson = {"id" : i, "rollid": rollid, "show": true};
        finalJson.push(refJson);
    }

    const fs = require('fs');
    fs.writeFileSync('data.json', JSON.stringify(finalJson));
}

test();