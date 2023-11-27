function activationKey(input) {

    let activationKey = input.shift();

    let command = input.shift();

    while (command !== `Generate`) {

        let commandSplit = command.split(`>>>`)

        switch (commandSplit[0]) {
            case "Contains":
                contains(activationKey, commandSplit[1]);
                break;
            case "Flip":
                flip(activationKey, commandSplit[1], commandSplit[2], commandSplit[3])
                break;
            case "Slice":
                slice(activationKey, commandSplit[1], commandSplit[2])
                break;
        }


        command = input.shift();
    }


    function contains(key, word) {

        if (key.includes(word)) {
            console.log(`${key} contains ${word}`);
        } else {
            console.log(`Substring not found!`);
        }

    }

    function flip(key, upOrLow, startingIndex, endingIndex) {

        let wordToReplace = key.slice(startingIndex, endingIndex);

        if (upOrLow == "Upper") {

            let modifiedToUp = wordToReplace.toUpperCase();

            console.log(activationKey = key.replace(wordToReplace, modifiedToUp));

        } else {

            let modifiedToLow = wordToReplace.toLowerCase();

            console.log(activationKey = key.replace(wordToReplace, modifiedToLow));
        }

    }

    function slice(key, startingIndex, endingIndex) {

        let wordToCut = key.slice(startingIndex, endingIndex);
        console.log(activationKey = key.replace(wordToCut, ""));

    }

    console.log(`Your activation key is: ${activationKey}`);

}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

