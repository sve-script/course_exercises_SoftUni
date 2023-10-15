function searingForANumber(array, threeNumbers) {

    let modifiedArray = array.splice(0, threeNumbers[0]);

    modifiedArray.splice(0, threeNumbers[1])

    let count = 0;
    for (let el of modifiedArray) {
        if (el == threeNumbers[2]) {
            count++
        }
    }
    console.log(`Number ${threeNumbers[2]} occurs ${count} times.`);

}
searingForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]

)