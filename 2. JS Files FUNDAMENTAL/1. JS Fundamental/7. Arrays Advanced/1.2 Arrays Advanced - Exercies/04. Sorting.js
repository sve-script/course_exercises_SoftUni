function sorting(array) {

    let newArr = array.sort((a, b) => b - a);

    let arrayForPrint = []


    while (newArr.length > 0) {
        arrayForPrint.push(newArr.shift(), newArr.pop())
    }

    console.log(arrayForPrint.join(` `));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])