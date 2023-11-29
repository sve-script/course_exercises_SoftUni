function aMinerTask(array) {

    let obj = {};


    for (let i = 0; i < array.length; i += 2) {
        let resources = array[i];
        let quantity = Number(array[i + 1]);

        if (resources in obj) {
            obj[resources] += quantity;
            continue;
        }
        obj[resources] = quantity
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)
