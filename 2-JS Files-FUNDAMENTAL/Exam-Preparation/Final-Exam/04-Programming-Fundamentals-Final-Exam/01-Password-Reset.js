function passwordReset(input) {

    let passwordTry = input.shift();

    let command = input.shift();

    while (command !== `Done`) {

        let splitCommand = command.split(` `);

        switch (splitCommand[0]) {
            case "TakeOdd": takeOdd(passwordTry);

                break;
            case "Cut": cut(passwordTry, splitCommand[1], splitCommand[2]);

                break;
            case "Substitute": substring(passwordTry, splitCommand[1], splitCommand[2])

                break;
        }

        command = input.shift();
    }

    console.log(`Your password is: ${passwordTry}`);


    function takeOdd(string) {

        let newString = "";

        for (let word in string) {
            if (word % 2 == 1) {
                newString += string[word]
            }
        }
        passwordTry = newString;
        console.log(passwordTry);
        return passwordTry;
    }


    function cut(string, startingIndex, cut) {

        cutting = string.slice(Number(startingIndex), Number(startingIndex) + Number(cut))
        passwordTry = passwordTry.replace(cutting, "");
        console.log(passwordTry);
        return passwordTry
    }


    function substring(string, symbol, replaceSymbol) {

        if (!string.includes(symbol)) {
            return console.log(`Nothing to replace!`);
        } else {
            while (string.includes(symbol)) {
                string = string.replace(symbol, replaceSymbol)
            }
        }
        passwordTry = string;
        console.log(passwordTry);
        return passwordTry

    }
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

