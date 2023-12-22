function biggestElement(params) {

    let biggestElement = Number.MIN_SAFE_INTEGER;

    params.forEach(el => {
        for (let n of el) {
            if (biggestElement < n) {
                biggestElement = n;
            }
        }
    })

    return biggestElement

}
console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]
));