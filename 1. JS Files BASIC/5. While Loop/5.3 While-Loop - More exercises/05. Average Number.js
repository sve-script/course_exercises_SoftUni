function averageNumber(input) {
    let index = 0;

    let startNumber = Number(input[index]);
    index++

    let sum = 0;
    let count = 0;

    for (let i = 1; i <= startNumber; i++) {
        let numb = Number(input[i]);
        sum += numb;
        count++
    }

    let final = sum / count;
    console.log(final.toFixed(2));
}

averageNumber([4,
    3,
    2,
    4,
    2,
])