function harvest(input) {
    let vineyardSqX = Number(input[0]);
    let vineyardSqY = Number(input[1]);
    let needWineZ = Number(input[2]);
    let workers = Number(input[3]);

    let wineSafe = vineyardSqX * 0.40;
    let vineyardKg = vineyardSqY * wineSafe

    let workerWine = 0;
    let wine = vineyardKg / 2.5

    if (wine >= needWineZ) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        workerWine = wine % needWineZ
        console.log(`${Math.ceil(workerWine)} liters left -> ${Math.ceil(workerWine / workers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(needWineZ - wine)} liters wine needed.`);
    }
}
harvest([650, 2, 209, 4])