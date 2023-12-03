function theImitationGame(input) {

    let encryptMsg = input.shift();

    let command = input.shift();

    while (command !== "Decode") {

        let splitCommand = command.split(`|`);


        switch (splitCommand[0]) {
            case "Move": move(encryptMsg, Number(splitCommand[1]))
                break;
            case "Insert": insert(encryptMsg, Number(splitCommand[1]), splitCommand[2])
                break;
            case "ChangeAll": change(encryptMsg, splitCommand[1], splitCommand[2]);
                break;
        }

        command = input.shift();
    }


    function move(msg, movedEl) {

        encryptMsg = msg.slice(movedEl) + msg.slice(0, movedEl)
    }
    function insert(msg, index, value) {

        encryptMsg = msg.slice(0, index) + value + msg.slice(index);
        debugger;
    }
    function change(msg, string, replacement) {

        encryptMsg = msg.split(string).join(replacement);

    }


    console.log(`The decrypted message is: ${encryptMsg}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)