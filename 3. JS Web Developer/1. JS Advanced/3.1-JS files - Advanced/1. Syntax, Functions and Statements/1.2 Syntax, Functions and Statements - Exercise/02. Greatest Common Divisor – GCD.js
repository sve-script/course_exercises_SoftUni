function greatestCommonDivisor(numbOne, numbTwo) {

    let arr = [numbOne, numbTwo].sort((a, b) => a - b);

    let biggestDivisor;

    for (let i = 1; i <= arr[0]; i++) {
        if (numbOne % i == 0 && numbTwo % i == 0) {
            biggestDivisor = i
        }
    }
    console.log(biggestDivisor);
}
greatestCommonDivisor(2154, 458)