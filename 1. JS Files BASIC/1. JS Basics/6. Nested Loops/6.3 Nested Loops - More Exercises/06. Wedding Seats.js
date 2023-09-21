function weddingSeats(input) {

    let sector = input[0];
    let startSeatedPlaces = Number(input[1]);
    let oddSeatedPlaces = Number(input[2]);

    let flag = false;
    let finish = false;
    let finishIndex = 0;

    let totalPlaces = 0;
    let counter = 0;

    let alphabetBIG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetSMALL = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < alphabetBIG.length; i++) {
        if (flag) {
            break;
        }
        let startSector = alphabetBIG[i];

        if (startSector === sector) {
            finish = true;
            finishIndex = i;
        }
        if (finish) {
            for (let sector = 0; sector <= finishIndex; sector++) {

                let sectorToPrint = alphabetBIG[sector];

                if (startSector === alphabetBIG[finishIndex + 1]) {
                    flag = true;
                    break;
                }

                for (let row = 1; row <= startSeatedPlaces; row++) {
                    counter = 0;

                    for (let a = 0; a <= alphabetSMALL.length; a++) {

                        let smallBets = alphabetSMALL[a];

                        if (row % 2 == 1) {
                            if (counter == oddSeatedPlaces) {
                                break;
                            }
                            counter++;
                            console.log(`${sectorToPrint}${row}${smallBets}`);
                        } else {
                            if (counter == oddSeatedPlaces + 2) {
                                break;
                            }
                            counter++;
                            console.log(`${sectorToPrint}${row}${smallBets}`);
                        }
                        totalPlaces++
                    }
                }
                startSeatedPlaces++
            }
        }
    }
    console.log(totalPlaces);
}
weddingSeats(["C", 4, 2])