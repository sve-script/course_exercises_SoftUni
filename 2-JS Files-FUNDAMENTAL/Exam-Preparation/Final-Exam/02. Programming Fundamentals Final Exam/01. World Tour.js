function worldTour(input) {

    let string = input.shift();

    let command = input.shift();

    while (command !== "Travel") {

        let splitCommand = command.split(`:`);

        switch (splitCommand[0]) {
            case "Add Stop": addStop(string, Number(splitCommand[1]), splitCommand[2])
                break;
            case "Remove Stop": removeStop(string, Number(splitCommand[1]), Number(splitCommand[2]))
                break;
            case "Switch": swch(string, splitCommand[1], splitCommand[2])
                break;
        }
        console.log(string);
        command = input.shift();
    }


    console.log(`Ready for world tour! Planned stops: ${string}`);

    function addStop(str, index, stringToAdd) {

        if (index >= 0) {
            if (str.length <= index) {
                return;
            } else {
                return string = str.slice(0, index) + stringToAdd + str.slice(index);
            }
        } else {
            return;
        }


    }
    function removeStop(str, startingIndex, endingIndex) {

        if (startingIndex >= 0 && endingIndex >= 0) {
            if (str.length <= startingIndex || str.length <= endingIndex) {
                return;
            } else {
                let cut = str.slice(startingIndex, endingIndex + 1);
                string = str.replace(cut, "");
                return string;
            }
        } else {
            return;
        }

    }
    function swch(str, oldOneStr, newOneStr) {

        return string = str.split(oldOneStr).join(newOneStr);

    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])



