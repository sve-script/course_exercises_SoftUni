function lastKNumbersSequence(n, k) {

    const arr = [1];

    for (let i = 1; i < n; i++) {

        if (arr.length < k) {
            let sum = arr.reduce((acc, value) => acc + value);
            arr.push(sum)

        } else {
            let sum = 0;
            for (let j = i - k; j < i; j++) {
                sum += arr[j]
            }
            arr.push(sum)
        }

    }

    return arr;
}
lastKNumbersSequence(8, 2)