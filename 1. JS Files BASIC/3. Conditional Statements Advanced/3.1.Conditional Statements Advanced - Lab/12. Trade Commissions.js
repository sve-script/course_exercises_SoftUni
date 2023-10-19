function tradeCommissions(input) {

    let town = input[0];
    let sales = Number(input[1]);

    let commission = 0.0;

    if (sales > 0) { // тук проверяваме дали е 0
        switch (town) {
            case `Sofia`:
                if (sales <= 500) { // тук вече, сме проверили дали е по-голямо от 0 и търсим дали е до 500 или равно на 500
                    commission = sales * 0.05;
                } else if (sales <= 1000) {  // тук вече , сме проверили дали е до 500 и търсим дали е до 1000 (не е нужно да слагам проверка за до 500) 
                    commission = sales * 0.07;
                } else if (sales <= 10000) {
                    commission = sales * 0.08;
                } else
                    commission = sales * 0.12
                console.log(commission.toFixed(2));
                break;
            case `Varna`:
                if (sales > 0 && sales <= 500) { /// от тук надолу стоят проверките, но са излишни !
                    commission = sales * 0.045;
                } else if (sales > 500 && sales <= 1000) {
                    commission = sales * 0.075;
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales * 0.1;
                } else
                    commission = sales * 0.13
                console.log(commission.toFixed(2))
                break;
            case `Plovdiv`:
                if (sales > 0 && sales <= 500) {
                    commission = sales * 0.055;
                } else if (sales > 500 && sales <= 1000) {
                    commission = sales * 0.08;
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales * 0.12;
                } else
                    commission = sales * 0.145
                console.log(commission.toFixed(2))
                break;
            default: console.log(`error`)
        }
    } else console.log(`error`)
}

tradeCommissions(["Sofia",
    "-499.99"])


/*Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
Град	0 ≤ s ≤ 500 | 500 < s ≤ 1 000 | 1 000 < s ≤ 10 000 | s > 10 000
Sofia	    5%	    |       7%	      |         8%	       |        12%
Varna	    4.5%	|       7.5%	  |         10%        |        13%
Plovdiv     5.5%	|       8%	      |         12%	       |        14.5%
Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. 
Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
 */