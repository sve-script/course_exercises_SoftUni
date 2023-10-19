function catFood(input) {
    let index = 0;
    let catNumbers = input[index];
    index++

    let totalFood = 0;;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

    for (let i = index; i < input.length; i++) {
        totalFood += Number(input[i]);
        let currentFood = Number(input[i])
        if (currentFood < 200) {
            group1++
        } else if (currentFood >= 200 && currentFood < 300) {
            group2++
        } else {
            group3++
        }

    }

    let totalPrice = ((totalFood / 1000) * 12.45).toFixed(2);

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${totalPrice} lv.`)
}
catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])


