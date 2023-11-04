function makeADictionary(jsonArray) {


    let obj = {};


    let json = jsonArray.map((item) => JSON.parse(item));

    for (let object of json) {
        for (let [key, value] of Object.entries(object)) {
            obj[key] = value

        }
    }


    for (let key in obj) {
        console.log(key, obj[key]);
    }






















    // let objArray = [];

    // for (let json of jsonArray) {

    //     let parseValue = JSON.parse(json);
    //     let entries = Object.entries(parseValue)
    //     objArray.push(parseValue)
    // }

    // let obj = {};

    // for (let object of objArray){

    // }

    // let sortedArray = objArray.sort((a, b) => {
    //     let keyOne = Object.keys(a)[0];
    //     let keyTwo = Object.keys(b)[0];

    //     if (keyOne < keyTwo) {
    //         return -1;
    //     } else if (keyOne > keyTwo) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // })



    // for (let obj of sortedArray) {
    //     for (let key in obj) {
    //         console.log(`Term: ${key} => Definition: ${obj[key]}`);
    //     }
    // }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])