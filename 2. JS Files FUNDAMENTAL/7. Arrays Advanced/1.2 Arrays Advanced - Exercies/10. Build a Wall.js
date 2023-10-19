function buildWall(array) {

    let sumToPrint = [];
    let totalSum = 0;
    while (array.length > 0) {

        let cubic = 0;

        for (let i = 0; i < array.length; i++) {

            if (array[i] == 30) {
                array.splice(i, 1);
                i--
            } else {
                cubic += 195;
                array[i] += 1;
            }
        }
        if (cubic !== 0) {

            sumToPrint.push(cubic)
        }
    }
    console.log(sumToPrint.join(`, `));

    for (let el of sumToPrint) {
        totalSum += el
    }
    console.log(`${totalSum * 1900} pesos`);
}

buildWall([21, 25, 28])