function primeNumberChecker(number) {

    let isPrime = true;

    if (number == 1){
        isPrime = false;
    }else if (number > 1){

        for (let i = 2; i < number; i++){
            if (number % i == 0){
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime);
}
primeNumberChecker(8)