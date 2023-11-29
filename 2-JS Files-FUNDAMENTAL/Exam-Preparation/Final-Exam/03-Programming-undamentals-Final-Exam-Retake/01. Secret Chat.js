function secretChat(input) {

    let msg = input.shift();

    let command = input.shift();

    while (command !== "Reveal") {

        let [comma, indxOrSub, replace] = command.split(`:|:`);

        switch (comma) {
            case "InsertSpace":
                break;
            case "Reverse":
                break;
            case "ChangeAll":
                break;
        }
        command = input.shift();
    }

    function insertSpace(msg, index) {




    }
    function reverse(msg, substring) {


    }
    function changeAll(msg, substring, replace) {

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