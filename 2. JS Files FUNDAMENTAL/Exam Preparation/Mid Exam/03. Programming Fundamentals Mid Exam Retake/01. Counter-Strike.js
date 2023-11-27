function counterStrike(array) {

    let energy = Number(array.shift());
    let count = 0;

    let flag = false;

    for (let el of array) {
        if (el == "End of battle") {
            break;
        }
        let numbEl = Number(el);
        if (energy < numbEl) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            flag = true;
            break;
        }

        energy -= numbEl;
        count++;

        if (count % 3 == 0) {
            energy += count;
        }
    }

    if (!flag) {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])


