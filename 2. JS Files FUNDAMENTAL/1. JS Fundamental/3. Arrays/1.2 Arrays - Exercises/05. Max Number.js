function maxNumber(arr) {


    let topInteger = [];

    for (let i = 0; i < arr.length; i++) {
        let flag = false;

        for (let j = i + 1; j < arr.length; j++) {

            if (topInteger.includes(arr[i])) {
                break;
            }

            if (arr[i] > arr[j]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }

        if (flag) {
            topInteger.push(arr[i])
        }

    }

    topInteger.push(arr[arr.length - 1])
    console.log(topInteger.join(` `));

}
maxNumber([14, 24, 3, 19, 15, 17]);
// 0,  1,  2, 3,  4,  5


/// second and more batter !!!
function maxNumb(array) {

    let topMaxNumbs = [];

    for (let i = 0; i < array.length; i++) {
        let isTrue = true;

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {

            } else {
                isTrue = false;
                break;
            }
        }

        if (isTrue) {
            topMaxNumbs.push(array[i]);
        }
    }
    console.log(topMaxNumbs.join(` `));

}

maxNumb([1, 4, 3, 2]);