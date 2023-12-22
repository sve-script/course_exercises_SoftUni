function proccessOddPositions(params) {

    let newArr = [];

    for (let i = 1; i < params.length; i += 2) {
        newArr.push(params[i] * 2);
    }

    return newArr.reverse().join(` `)

}
console.log(proccessOddPositions([3, 0, 10, 4, 7, 3]));