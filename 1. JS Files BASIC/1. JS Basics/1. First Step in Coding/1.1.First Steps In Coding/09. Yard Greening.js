function yardGreenings (input) {

    let yard = Number(input[0]) * 7.61;
    let discountSum = 0.18 * yard;
    let finalPrice = yard - discountSum

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountSum} lv.`)

}

yardGreenings(["550"]) 