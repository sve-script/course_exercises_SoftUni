function profit(input) {

    let oneCoins = Number(input[0]);
    let twoCoins = Number(input[1]);
    let fiveCoins = Number(input[2]);

    let sum = Number(input[3]);


    for (let one = 0; one <= oneCoins; one++) {

        let sumTotal = 0;

        let one1 = 1 * one;

        for (let two = 0; two <= twoCoins; two++) {

            let two2 = 2 * two;

            for (let five = 0; five <= fiveCoins; five++) {

                let five5 = 5 * five;

                sumTotal = one1 + two2 + five5
                if (sumTotal === sum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit([5, 3, 1, 7])