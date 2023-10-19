function happyCatParking(input) {

    let days = Number(input[0]);
    let h = Number(input[1]);

    let totalSum = 0;
    let counter = 0;

    for (let i = 1; i <= days; i++) {

        let sum = 0;


        for (let y = 1; y <= h; y++) {

            if (i % 2 === 0 && y % 2 !== 0) {
                sum += 2.50;

            } else if (i % 2 !== 0 && y % 2 === 0) {
                sum += 1.25;

            } else {
                sum += 1;
            }

        }
        totalSum +=sum
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking([5, 2])