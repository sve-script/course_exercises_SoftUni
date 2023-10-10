function factorialDivision(n1, n2) {

    function numberOne(numb1) {

        if (numb1 > 0) {
            numb1 *= numberOne(numb1 - 1);
        } else {
            console.log(numb1);
            return numb1;
        }

    }

    numberOne(n1)

    function numberTwo(n2) {


    }

    function division(operator) {

    }


}
factorialDivision(5, 2)