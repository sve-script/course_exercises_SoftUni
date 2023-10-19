function perfectNumber(n) {

    function division(numb) {

        let arr = [];

        for (let i = 0; i <= n / 2; i++) {

            if (n % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }

    let divisionResult = division(n);

    function add(arr) {

        let sum = 0;

        for (let char of arr) {
            sum += char
        }

        return sum;

    }


    console.log(n == add(divisionResult) ? `We have a perfect number!` : `It's not so perfect.`);
}

perfectNumber(6)