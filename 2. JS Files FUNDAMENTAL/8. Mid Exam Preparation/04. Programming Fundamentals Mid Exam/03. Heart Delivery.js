function heartDelivery(array) {

    let neighborhood = array.shift().split("@").map(Number);

    let houseIndx = 0;

    while (array.length > 0) {
        let fullCommand = array.shift().split(` `);
        let jump = fullCommand[0];
        if (jump == "Love!") {
            break;
        }

        let indx = Number(fullCommand[1]);
        houseIndx += indx;
        if (houseIndx >= neighborhood.length) {
            houseIndx = 0;
        }
        if (neighborhood[houseIndx] > 0) {
            neighborhood[houseIndx] -= 2;

            if (neighborhood[houseIndx] == 0) {
                console.log(`Place ${houseIndx} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${houseIndx} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${houseIndx}.`);

    let filteredArr = neighborhood.filter(x => x > 0);

    if (filteredArr.length == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${filteredArr.length} places.`);
    }

}
heartDelivery(["2@4@2",
    "Jump 1",
    "Jump 1",
    "Jump 1",
    "Jump 3",
    "Jump 1",
    "Love!"])

