function spiceMustFlow (startingYield){

    let days = 0;
    let totalSpice = 0;

    while (startingYield >=100){
        days++;
        totalSpice += startingYield-26;
        startingYield -= 10;

        if(totalSpice <= 0){
            totalSpice = 0;
        }
    }

    if (totalSpice >= 26){
        totalSpice -=26;
    }else {
        totalSpice -=totalSpice;
    }

    console.log(days);
    console.log(totalSpice);
}
spiceMustFlow(155)