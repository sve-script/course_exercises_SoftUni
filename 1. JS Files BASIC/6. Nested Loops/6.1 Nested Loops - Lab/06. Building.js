function building(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floor; f > 0; f--) {
        let building = ""
        for (let r = 0; r < rooms; r++) {
            if (f === floor) {
                building += `L${f}${r} `
            } else if (f % 2 !== 0) {
                building += `A${f}${r} `
            } else {
                building += `O${f}${r} `
            }
        }
        console.log(building);
    }
}
building(["9", "5"])