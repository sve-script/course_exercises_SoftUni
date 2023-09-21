function gameOfIntervals(input) {
    index = 0;
    let moves = Number(input[index]);
    index++

    let zeroToNine = 0;
    let tenToNineteen = 0;
    let twentyToTwentyNine = 0;
    let thirdTenToThirtyNine = 0;
    let fourthTeenToFifty = 0;
    let invalidNumbers = 0;

    let points = 0
    let number = 0;

    for (let i = 1; i < input.length; i++) {
        number = Number(input[i]);
        if (number >= 0 && number <= 9) {
            points += number * 0.20;
            zeroToNine++
        } else if (number >= 10 && number <= 19) {
            points += number * 0.30;
            tenToNineteen++
        } else if (number >= 20 && number <= 29) {
            points += number * 0.40;
            twentyToTwentyNine++
        } else if (number >= 30 && number <= 39) {
            points += 50;
            thirdTenToThirtyNine++
        } else if (number >= 40 && number <= 50) {
            points += 100;
            fourthTeenToFifty++
        } else {
            points /= 2
            invalidNumbers++
        }
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(zeroToNine / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(tenToNineteen / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyToTwentyNine / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirdTenToThirtyNine / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fourthTeenToFifty / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers / moves * 100).toFixed(2)}%`);

}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])