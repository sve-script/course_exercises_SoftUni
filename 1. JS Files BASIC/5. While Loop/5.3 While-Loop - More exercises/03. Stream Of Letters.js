function steamOfLetters(input) {

    let index = 0;
    let command = input[index];
    index++;

    let array = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let c = 0;
    let o = 0;
    let n = 0;

    let safeSymbol = ""
    let safeWord = "" // Hello


    while (command !== "End") {
        flag = false
        for (let i = 0; i < array.length; i++) {
            let s = array[i];

            if (command == s) {
                flag = true;
                break;
            }
         }

        if (!flag) {
            command = input[index];
            index++
            continue;
        }
        debugger
        let firstSymbol = command;

        if (firstSymbol === "c") {
            c++;
            if (c == 2) {
                safeSymbol += firstSymbol;
                c--;
            }
        } else if (firstSymbol === "o") {
            o++;
            if (o == 2) {
                safeSymbol += firstSymbol;
                o--;
            }
        } else if (firstSymbol === "n") {
            n++;
            if (n == 2) {
                safeSymbol += firstSymbol;
                n--;
            }
        }

        let sumCount = c + o + n;

        if (sumCount === 3) {
            safeWord += `${safeSymbol} `
            safeSymbol = "";
            c = 0;
            o = 0;
            n = 0;
            debugger;
        }

        if (firstSymbol !== "c" && firstSymbol !== "o" && firstSymbol !== "n") {
            safeSymbol += firstSymbol
        }

        command = input[index];
        index++
    }
    console.log(safeWord);
}

steamOfLetters(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"
])