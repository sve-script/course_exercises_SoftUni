function catFood(input) {
    let countCats = Number(input[0]);
    let hranaGram = 0;

    let totalFood = 0;
    let totalKg = 0;

    let cats1 = 0;
    let cats2 = 0;
    let cats3 = 0;

    for (i = 1; i < countCats + 1; i++) {
        hranaGram = Number(input[i]);
        totalFood += hranaGram;

        if (hranaGram < 200) {
            cats1++;
        } else if (hranaGram < 300) {
            cats2++;
        } else if (hranaGram < 400) {
            cats3++;
        }
    }

    totalKg = totalFood / 1000;

    console.log(`Group 1: ${cats1} cats.`);
    console.log(`Group 2: ${cats2} cats.`);
    console.log(`Group 3: ${cats3} cats.`);
    console.log(`Price for food per day: ${(totalKg * 12.45).toFixed(2)} lv.`);
}
catFood(["6", "102", "236", "123", "399", "342", "222"]);