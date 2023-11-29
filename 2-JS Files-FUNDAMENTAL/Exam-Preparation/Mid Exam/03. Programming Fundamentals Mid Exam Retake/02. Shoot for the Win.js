function shootForTheWin(array) {

    let targetsSequence = array.shift().split(` `).map(Number);

    for (let el of array) {
        if (el == "End") {
            break;
        }

        let numbEl = Number(el);

        let shootingPower = targetsSequence[numbEl];
        if (shootingPower == undefined) {
            continue;
        }
        targetsSequence[numbEl] = -1;

        for (let i = 0; i < targetsSequence.length; i++) {
            if (targetsSequence[i] == -1) {
                continue;
            }
            if (targetsSequence[i] > shootingPower) {
                targetsSequence[i] -= shootingPower
            } else {
                targetsSequence[i] += shootingPower
            }
        }
    }

    let filtered = targetsSequence.filter(x => x == -1)

    console.log(`Shot targets: ${filtered.length} -> ${targetsSequence.join(` `)}`);

}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

