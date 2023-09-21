function foodDelivery(input) {

    let chickenMeal = Number(input[0]) * 10.35;
    let fishMeal = Number(input[1]) * 12.40;
    let veganMeal = Number(input[2]) * 8.15;

    let fullMealPrice = chickenMeal + fishMeal + veganMeal;
    let dessert = fullMealPrice * 0.2;

    let fullPrice = fullMealPrice + dessert + 2.50;
    console.log(fullPrice);

}

foodDelivery(["2 ", "4 ", "3 "])