function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;

    let electricity = Number(input[index]);

    let electricitySum = 0;
    let water = 20;
    let internet = 15;
    let others = 0;

    let otherTotal = 0;

    for (let i = index; i < input.length; i++) {
        electricity = Number(input[i]);
        electricitySum += electricity
        others = (electricity + water + internet) * 0.20
        otherTotal += electricity + water + others + internet
    }
    console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
    console.log(`Water: ${(water * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internet * months).toFixed(2)} lv`);
    console.log(`Other: ${otherTotal.toFixed(2)} lv`);
    console.log(`Average: ${((electricitySum + water * months + internet * months + otherTotal) / months).toFixed(2)} lv`);

}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22])