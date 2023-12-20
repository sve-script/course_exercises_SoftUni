function sameNumber(params) {

    let numbAsString = params.toString().split(``);

    let set = new Set(numbAsString);

    let sum = 0;

    numbAsString.forEach(element => {
        sum += Number(element)
    });

    console.log(set.size == 1 ? true : false);
    console.log(sum);
}
sameNumber(2222222)