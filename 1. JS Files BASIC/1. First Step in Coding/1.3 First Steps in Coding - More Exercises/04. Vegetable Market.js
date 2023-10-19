function vegatableMarket(input){
    let vegetablePricePerKg = Number(input[0]);
    let fruitPricePerKg = Number(input[1]);
    let totalVegKg = Number(input[2]);
    let totalFruitKg = Number(input[3]);

    let totalVegetable = vegetablePricePerKg * totalVegKg
    let totalFruit = fruitPricePerKg *totalFruitKg

    console.log(((totalVegetable + totalFruit) / 1.94).toFixed(2));

}
vegatableMarket([0.194,19.4,10,10])