function partyTime(array) {

    let partyInv = {
        VIP: [],
        regular: []
    }

    let foundParty = false;

    for (person of array) {

        if (person == `PARTY`) {
            foundParty = true;
            continue;
        }

        if (!foundParty) {
            let firstWord = parseInt(person[0]);

            if (!isNaN(firstWord)) {
                partyInv.VIP.push(person);
            } else {
                partyInv.regular.push(person)
            }
        } else {
            let firstWord = parseInt(person[0]);


            if (!isNaN(firstWord)) {
                let indx = partyInv.VIP.indexOf(person);
                partyInv.VIP.splice(indx, 1)
            } else {
                let indx = partyInv.regular.indexOf(person);
                partyInv.regular.splice(indx, 1)
            }
        }

    }


    let entries = Object.entries(partyInv);

    let totalPerson = 0;

    for (let [_, personNumber] of entries) {
        totalPerson += personNumber.length
    }
    console.log(totalPerson);

    for (let el of entries) {
        for (let printValue of el[1]) {
            console.log(printValue)
        }
    }
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    `6rqewwQ`,
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)