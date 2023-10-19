function ThePyramidOfKingDjoser(base, increment) {

    let steps = 0;

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    for (let i = base; i >= 1; i = i - 2) {

        steps++;

        let currentStep = Math.pow(i, 2);
        let stonePerStep = Math.pow(i - 2, 2);

        if (i <= 2) {
            totalGold = currentStep;
            break;
        }

        totalStone += stonePerStep;

        if (steps % 5 == 0) {
            totalLapisLazuli += currentStep - stonePerStep;
        } else {
            totalMarble += currentStep - stonePerStep;
        }
    }

    console.log(`Stone required: ${Math.ceil(totalStone * increment)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(totalGold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);

}
ThePyramidOfKingDjoser(26, 0.3)