function fuelTank(input){
    let fuelType = input[0];
    let fuelLiters = Number(input[1]);

    switch(fuelType){
        case `Diesel`: 
        case `Gasoline` :
        case `Gas` :
            if (fuelLiters >= 25){
                console.log(`You have enough ${fuelType.toLowerCase()}.`);
            } else {
                console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
            }
            break;
        default :
            console.log(`Invalid fuel!`);
        
    }

}
fuelTank(["Gas", 26])