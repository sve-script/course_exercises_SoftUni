function biggerHalf(params) {

    return params.sort((a, b) => a - b).slice(Math.floor(params.length / 2));
}
console.log(biggerHalf([4, 7, 2, 5]));