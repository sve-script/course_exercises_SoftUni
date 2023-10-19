function magicMatrices(arr) {

    let concat = arr[0].concat(arr[1], arr[2]);
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    let count = 0;

    for (let i = 0; i < concat.length; i++) {
        if (count == 3) {
            count = 0;
        }
        count++
        if (count == 1) {
            sum1 += Number(concat[i])
        } else if (count == 2) {
            sum2 += concat[i]
        } else {
            sum3 += concat[i]
        }

    }

    if (sum1 == sum2 && sum2 == sum3) {
        console.log(true);
    } else {
        console.log(false);
    }

}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])