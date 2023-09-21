function depositCalcuator(input) {

    let amountDeposited = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
    
    let interest = amountDeposited * annualInterestRate;
    let interestMonth = interest / 12;
    let totalSum = amountDeposited + termDeposit * interestMonth

    console.log(totalSum);

}

depositCalcuator(["200", "3", "5.7"])