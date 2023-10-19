function transportPrice(input){
    let km = Number(input[0]);
    let dayPart = input[1];

    taxiStartPrice = 0;
    sum = 0;
    if (km < 20){
        taxiStartPrice = 0.70
        switch(dayPart){
            case `day`:
                sum = 0.79
                break;
            case `night`:
                sum = 0.90;
                break;
        } 
    }else if (km >= 20 && km < 100){
        sum = 0.09;
    } else {
        sum = 0.06
    }
    
    console.log(((km*sum)+taxiStartPrice).toFixed(2));

}
transportPrice([25,"night"])