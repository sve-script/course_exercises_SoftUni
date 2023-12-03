function stringManipulator(input) {

    let text = input.shift();

    let command = input.shift();

    while (command !== "End") {

        let splitCommand = command.split(` `);

        switch (splitCommand[0]) {
            case "Translate": translate(text, splitCommand[1], splitCommand[2]);
                break;
            case "Includes": includes(text, splitCommand[1]);
                break;
            case "Start": start(text, splitCommand[1]);
                break;
            case "Lowercase": lowercase(text)
                break;
            case "FindIndex": findIndex(text, splitCommand[1]);
                break;
            case "Remove": remove(text, Number(splitCommand[1]), Number(splitCommand[2]))
                break;
        }
        command = input.shift();
    }


    function translate(string, char, replace) {

        text = string.split(char).join(replace);
        console.log(text);
        return text;
    }

    function includes(string, char) {

        return console.log(string.includes(char) ? "True" : "False");
    }
    function start(string, char) {

        return console.log(string.startsWith(char) ? "True" : "False");
    }
    function lowercase(string) {

        text = string.toLowerCase();
        console.log(text);
    }

    function findIndex(string, index) {

        return console.log(string.lastIndexOf(index));
    }

    function remove(string, startingIndex, count) {

        let cut = string.slice(startingIndex, startingIndex + count);
        text = text.replace(cut, "");
        return console.log(text);
    }
}
stringManipulator(["*S0ftUni is the B3St Plac3**",

    "Translate 2 o",

    "Includes best",

    "Start the",

    "Lowercase",

    "FindIndex p",

    "Remove 2 7",

    "End"])