function arrayManipulations(array) {

    let modifiedArray =
        array
            .shift()
            .split(` `)
            .map(Number);

    let totalCommands =
        array
            .join(` `)
            .split(` `);

    let commands = totalCommands.filter(x => x % 1 !== 0);
    let valueCommands = totalCommands.filter(x => x % 1 == 0).map(Number)

    for (let i = 0; i < commands.length; i++) {

        let currentCommand = commands[i];

        switch (currentCommand) {
            case "Add":
                add(valueCommands[i])
                break;
            case "Remove":
                remove(valueCommands[i])
                break;
            case "RemoveAt":
                removeAt(valueCommands[i])
                break;
            default:
                insert(valueCommands[i], valueCommands[i + 1])
                break;
        }
    }


    function add(number) {
        modifiedArray.push(number)
        return modifiedArray
    }

    function remove(numb) {
        let filtered = modifiedArray.filter(x => x !== Number(numb));
        modifiedArray = filtered;
        return modifiedArray
    }

    function removeAt(index) {
        modifiedArray.splice(index, 1);
        return modifiedArray;
    }

    function insert(number, index) {
        modifiedArray.splice(index, 0, number);
        valueCommands.splice(index, 1)
        return modifiedArray;
    }

    console.log(modifiedArray.join(` `));

}

arrayManipulations(['4 19 2 53 6 43',
    'Insert 8 3', // 8 vliza na 3 index 
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3',]
)