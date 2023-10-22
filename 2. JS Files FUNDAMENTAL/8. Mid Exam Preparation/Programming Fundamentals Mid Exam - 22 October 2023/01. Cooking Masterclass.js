function cookingMasterclass(array) {

    let budget = array.shift();
    let students = array.shift();
    let flourPrice = array.shift();
    let singleEggPrice = array.shift();
    let singleApronPrice = array.shift();

    let totalFlourCount = 0;
    let totalEggCount = 0;
    let apronCount = 0;

    let freeFlourCount = 0;


    for (let i = 0; i < students; i++) {
        totalFlourCount++;
        totalEggCount++;
        apronCount++;

        if (totalFlourCount % 5 == 0) {
            freeFlourCount++
        }
    }

    let totalApronCount = Math.ceil(apronCount * 1.2)

    let totalFlourPrice = (totalFlourCount - freeFlourCount) * flourPrice;
    let totalEggPrice = totalEggCount * singleEggPrice * 10;
    let totalApronPrice = totalApronCount * singleApronPrice;

    let totalCost = totalFlourPrice + totalEggPrice + totalApronPrice;

    if (budget >= totalCost) {
        console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);
    }


}
cookingMasterclass([946, 20, 12.05, 0.42, 27.89])