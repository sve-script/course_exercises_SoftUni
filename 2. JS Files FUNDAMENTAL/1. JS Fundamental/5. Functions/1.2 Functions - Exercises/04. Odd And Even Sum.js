function oddAndEvenSum(numb) {

    let numbAsString = numb.toString();

    let evenSum = 0;
    let oodSum = 0;


    function cycle(numbers) {
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 == 0) {
                evenSum += Number(numbers[i]);
            } else {
                oodSum += Number(numbers[i]);
            }
        }

    }
    cycle(numbAsString)

    console.log(`Odd sum = ${oodSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(3495892137259234);
