function EvenAndOddSubtraction(arr) {

    let even = 0;
    let odd = 0;

    //for (let i = 0; i < arr.length; i++) {
    for(let sumEvenOdd of arr){

        if (sumEvenOdd % 2 == 0) {
            even += sumEvenOdd
        } else {
            odd += sumEvenOdd
        }
    }

    console.log(even - odd);
}

EvenAndOddSubtraction([2,4,6,8,10])