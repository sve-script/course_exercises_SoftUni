function TrekkingMani(input) {

    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimangaro = 0;
    let k2 = 0;
    let everest = 0;

    let peopleInGroups = 0;
    let totalPeople = 0;

    for (let index = 1; index < input.length; index++) {

        totalPeople += Number(input[index])
        peopleInGroups = Number(input[index])
        if (peopleInGroups <= 5) {
            musala += peopleInGroups
        } else if (peopleInGroups <= 12) {
            monblan += peopleInGroups
        } else if (peopleInGroups <= 25) {
            kilimangaro += peopleInGroups
        } else if (peopleInGroups <= 40) {
            k2 += peopleInGroups
        } else {
            everest += peopleInGroups
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimangaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}
TrekkingMani(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
