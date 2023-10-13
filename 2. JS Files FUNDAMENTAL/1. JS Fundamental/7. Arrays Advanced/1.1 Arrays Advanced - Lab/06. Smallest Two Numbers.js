function smallestTwoNumbers(arr) {

    let filter =
        arr
            .sort((a, b) => a - b)
            .slice(0, 2)
            .join(` `)

    return filter

}
smallestTwoNumbers([30, 15, 50, 5])