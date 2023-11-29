function cutAndReverse(word) {

    let middleIndex = word.length / 2;

    let firstHalf = word.substring(0, middleIndex).split(``).reverse().join(``)
    let secondHalf = word.substring(middleIndex).split(``).reverse().join(``)

    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')