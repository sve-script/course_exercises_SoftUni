function largestNumber(one, two, tree) {

    let arr = [one, two, tree];

    arr.sort((a, b) => b - a)
    console.log(`The largest number is ${arr[0]}.`);

}
largestNumber(-3, -5, -22.5)