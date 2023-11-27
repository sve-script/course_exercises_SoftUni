function inventory(arr) {

    let inventory = arr.shift().split(`, `)

    while (arr.length > 0) {

        let fullCommand = arr.shift().split(` - `);
        let command = fullCommand[0]

        if (command == "Craft!") {
            console.log(inventory.join(`, `));
            break;
        }

        switch (command) {
            case "Collect":
                collect(inventory, fullCommand[1])
                break;
            case "Drop":
                drop(inventory, fullCommand[1])
                break;
            case "Combine Items":
                combineItems(inventory, fullCommand[1])
                break;
            case "Renew":
                renew(inventory, fullCommand[1])
                break;
        }

    }

    function collect(array, item) {
        if (array.includes(item)) {
            return;
        }
        return array.push(item);
    }

    function drop(array, item) {
        let indxOfItem = array.indexOf(item)
        if (indxOfItem >= 0) {
            return array.splice(indxOfItem, 1)
        }
        return;
    }

    function combineItems(array, item) {
        let splitItems = item.replace(":", " ").split(" ");

        let indxOfItem = array.indexOf(splitItems[0]);
        if (indxOfItem >= 0) {
            return array.splice(indxOfItem + 1, 0, splitItems[1])
        }
        return;
    }

    function renew(array, item) {
        let indexOfItem = array.indexOf(item);
        if (indexOfItem >= 0) {
            array.splice(indexOfItem, 1)
            return array.push(item)
        }
        return;
    }
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]

)