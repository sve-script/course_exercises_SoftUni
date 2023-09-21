function vacation(input) {
    let index = 0;
    let vacationMoneyNeed = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;

    let array = input.length  // дължината на масива // array = Масив
    let daysSpend = 0;
    let days = 0;

    while (index < array) {
        days++
        let spendOrSave = input[index];
        index++
        let spendOrSaveMoney = Number(input[index]);
        index++
        if (spendOrSave == "spend") {
            availableMoney -= spendOrSaveMoney
            daysSpend++
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            if (daysSpend == 5) {
                console.log("You can't save the money.");
                console.log(daysSpend);
                break;
            }

        } else if (spendOrSave == "save") {
            availableMoney += spendOrSaveMoney
            daysSpend = 0;
            if (availableMoney >= vacationMoneyNeed) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }
    }

}
vacation(["60",
    "50",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "save",
    "10", 
    "save",
    "10", 
    "save",
    "10", 
    "save",
    "10",
    "save",
    "10"])




