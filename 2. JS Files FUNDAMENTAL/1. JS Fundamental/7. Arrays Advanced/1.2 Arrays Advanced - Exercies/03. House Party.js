function houseParty(array) {

    let guest = [];

    for (let i = 0; i < array.length; i++) {

        let firstComma = array[i].split(` `);

        if (firstComma.length == 3) {
            if (guest.includes(firstComma[0])) {
                console.log(`${firstComma[0]} is already in the list!`);
            } else {
                guest.push(firstComma[0])
            }
        } else {
            if (guest.includes(firstComma[0])) {
                let indx = guest.indexOf(firstComma[0]);
                guest.splice(indx, 1)
            } else {
                console.log(`${firstComma[0]} is not in the list!`);
            }
        }
    }
    console.log(guest.join(`\n`));

}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

)