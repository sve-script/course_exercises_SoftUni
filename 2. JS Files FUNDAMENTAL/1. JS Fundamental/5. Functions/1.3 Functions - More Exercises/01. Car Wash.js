function carWash(arr) {


    let carClean = 0;


    for (let char of arr) {

        switch (char) {
            case "soap": carClean += 10;
                break;
            case "water": carClean *= 1.2;
                break;
            case "vacuum cleaner": carClean *= 1.25;
                break;
            default: carClean *= 0.90;
                break;
        }
    }

    console.log(`The car is ${carClean.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])