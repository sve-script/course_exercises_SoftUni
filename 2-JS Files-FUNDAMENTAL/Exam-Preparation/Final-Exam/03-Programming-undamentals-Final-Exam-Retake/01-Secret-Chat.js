function secretChat(input) {

    let msg = input.shift();

    let command = input.shift();

    while (command !== "Reveal") {

        let [comma, indxOrSub, replace] = command.split(`:|:`);

        switch (comma) {
            case "InsertSpace": insertSpace(msg, indxOrSub)
                break;
            case "Reverse": reverse(msg, indxOrSub)
                break;
            case "ChangeAll": changeAll(msg, indxOrSub, replace)
                break;
        }
        console.log(msg);
        command = input.shift();
    }

    console.log(`You have a new text message: ${msg}`);

    function insertSpace(messages, index) {

        msg = messages.slice(0, Number(index)) + " " + messages.slice(Number(index));
        return msg;

    }
    function reverse(messages, substring) {

        if (messages.includes(substring)) {

            messages = messages.replace(substring, "");
            let reverseMsg = substring.split(``).reverse().join(``);
            msg = messages + reverseMsg

            return msg;

        } else {
            return console.log(`error`);
        }

    }
    function changeAll(messages, substring, replace) {

        msg = messages.split(substring).join(replace)
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)