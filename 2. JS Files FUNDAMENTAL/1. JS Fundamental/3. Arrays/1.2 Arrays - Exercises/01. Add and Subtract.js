function addAndSubtract(array) {

    let safeArray = 0;
    let sumArray = 0;

    for (let i = 0; i < array.length; i++) {

        safeArray += Number(array[i])

        if (array[i] % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }

    for (let j = 0; j < array.length; j++) {

        sumArray += array[j];

    }

    console.log(array)
    console.log(safeArray);
    console.log(sumArray);

}
addAndSubtract([-5, 11, 3, 0, 2])