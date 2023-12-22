function fruitShop(fruit, gram, pricePerKG) {

    console.log(`I need $${(pricePerKG * (gram / 1000)).toFixed(2)} to buy ${(gram / 1000).toFixed(2)} kilograms ${fruit}.`);
}
fruitShop('apple', 1563, 2.35)