function petShop(input) {

    let dogsFood = 2.5;
    let catsFood = 4;

    let totalPrice = dogsFood * Number(input[0]) + catsFood * Number(input[1]) + " lv.";

    console.log(totalPrice);

}

petShop(["5", "4"])