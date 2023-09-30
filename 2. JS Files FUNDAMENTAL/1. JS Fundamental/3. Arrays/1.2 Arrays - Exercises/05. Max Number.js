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