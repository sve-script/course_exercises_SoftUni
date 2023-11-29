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
        command = input.shift();
    }

    console.log(`You have a new text message: ${msg}`);

    function insertSpace(messages, index) {

        msg = messages.slice(0, Number(index)) + " " + messages.slice(Number(index));
        console.log(msg);
        return msg;

    }
    function reverse(messages, substring) {

        if (messages.includes(substring)) {

            messages = messages.replace(substring, "");
            let reverseMsg = substring.split(``).reverse().join(``);
            msg = messages + reverseMsg
            console.log(msg);
            return msg;

        } else {
            console.log(`error`);
        }

    }
    function changeAll(messages, substring, replace) {

        for (let i = 0; i < messages.length; i++) {

            if (messages.includes(substring)) {
                messages = messages.replace(substring, replace);
            }
        }

        console.log(messages);
        msg = messages;
        return msg
    }
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)