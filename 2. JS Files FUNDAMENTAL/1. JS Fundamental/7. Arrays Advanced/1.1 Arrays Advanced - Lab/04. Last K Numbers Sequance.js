function lastKNumbersSequence(n, k) {

    let newArr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < (k, newArr.length); j--) {
            console.log(j);

            sum += newArr[i - 1];
        }
        newArr.push(sum)
    }

    console.log(newArr.join(` `));

}
lastKNumbersSequence(6, 3)



// starting with 1;
// need to calculate all items in array for k (3) index before;
// array must be n (6) length;