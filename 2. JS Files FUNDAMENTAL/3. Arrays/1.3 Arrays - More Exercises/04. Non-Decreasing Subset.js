function nonDecreasingSubset(arr) {

    let printValue = [];
    let biggestNumb = 0;

    for (let i = 0; i < arr.length; i++) {
        let numb = arr[i];
        if (printValue.length == 0) {
            biggestNumb = arr[i];
            printValue.push(numb)
        } else {
            if (biggestNumb <= arr[i]) {
                biggestNumb = arr[i]
                printValue.push(arr[i]);
            }
        }
    }

    console.log(printValue.join(` `));
}

nonDecreasingSubset([0, 3, 2, 15, 6, 1])