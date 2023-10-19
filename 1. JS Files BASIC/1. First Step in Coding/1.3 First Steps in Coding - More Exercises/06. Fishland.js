function fishland(input){
    let mackerelPricePerKg = Number(input[0]); // цена за килограм на скумрия
    let sprinklePricePerKg = Number(input[1]); // цена за килограм на цаца

    let bonitoKg = Number(input[2]); //колко килограма паламуд
    let safridKg = Number(input[3]); //колко килограма сафрид
    let mussels = Number(input[4]) * 7.5; // колко килогарама миди 

    let bonitoPrice = bonitoKg * (mackerelPricePerKg * 1.6);
    let safridPrice = safridKg * (sprinklePricePerKg * 1.8);

    console.log((mussels+bonitoPrice+safridPrice).toFixed(2));


}
fishland([6.90,4.20,1.5,2.5,1])