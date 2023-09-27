function sumEvenNumbers (arr){

    let sum = 0;

    for (let sumAsString of arr){

        let sumAsNumber = Number(sumAsString);
        if(sumAsNumber % 2 == 0){
            sum+=sumAsNumber;
        }
    }

    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10'])