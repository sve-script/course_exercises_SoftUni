function diagonalSums(params) {

    let middleMatrixValue = Math.ceil(params[0].length / 2);
    let value1 = 0;
    let value2 = 0;

    for (let i = 0; i < params.length; i++) {

        value1 += params[i][i]
        value2 += params[params.length - 1 - i][i]
    }

    console.log(value1, value2);

}
diagonalSums([[20, 40],
[10, 60]]

)