function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
 
    switch (town) {
        case `Sofia`:
            if (product === `coffee`) {
                console.log(quantity * 0.5);
            } else if (product === `water`) {
                console.log(quantity * 0.80);
            } else if (product === `beer`) {
                console.log(quantity * 1.20);
            } else if (product === `sweets`) {
                console.log(quantity * 1.45);
            } else {
                console.log(quantity * 1.60);
            } break;
        case `Plovdiv`:
            if (product === `coffee`) {
                console.log(quantity * 0.40);
            } else if (product === `water`) {
                console.log(quantity * 0.70);
            } else if (product === `beer`) {
                console.log(quantity * 1.15);
            } else if (product === `sweets`) {
                console.log(quantity * 1.30)
            } else {
                console.log(quantity * 1.50)
            } break;
        default:
            if (product === `coffee`) {
                console.log(quantity * 0.45);
            } else if (product === `water`) {
                console.log(quantity * 0.7);
            } else if (product === `beer`) {
                console.log(quantity * 1.10);
            } else if (product === `sweets`) {
                console.log(quantity * 1.35);
            } else {
                console.log(quantity * 1.55)
            }
    }
 
}
smallShop([`sweets`, `Varna`, `0.635`])