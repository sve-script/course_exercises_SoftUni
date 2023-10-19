function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    /*roomForOnePerson = 18.00
    let apartment = 25.00
    let presidentApartment = 35.00*/

    price = 0

    if (days < 10) {
        switch (room) {
            case `room for one person`:
                price = (days - 1) * 18
                break;
            case `apartment`:
                price = ((days - 1) * 25) * 0.70
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.90
                break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (room) {
            case `room for one person`:
                price = (days - 1) * 18
                break;
            case `apartment`:
                price = ((days - 1) * 25) * 0.65
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.85
                break;
        }
    } else {
        switch (room) {
            case `room for one person`:
                price = (days - 1) * 18
                break;
            case `apartment`:
                price = ((days - 1) * 25) * 0.50
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.80
                break;
        }
    }


    switch (rating) {
        case `positive`: price = price * 1.25;
            break;
        case `negative`: price = price * 0.90;
            break;
    }

    console.log(price.toFixed(2));
}

skiTrip(["30",
    "president apartment",
    "negative"])

