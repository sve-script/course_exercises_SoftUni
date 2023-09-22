function specialNumbers(n) {



    for (let i = 1; i <= n; i++) {

        let sum = 0;

        let numAsString = i.toString();

        for (let j = 0; j < numAsString.length; j++) {
            sum += Number(numAsString[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            sum = true;
        } else {
            sum = false;
        }
        console.log(`${i} -> ${sum === true ? "True" : "False"}`);
    }
}

specialNumbers(15);