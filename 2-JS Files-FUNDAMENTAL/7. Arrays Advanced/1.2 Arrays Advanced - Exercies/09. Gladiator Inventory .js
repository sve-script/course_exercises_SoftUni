function gladiatorInventory(array) {

    let startingInventory = array.splice(0, 1).join(` `).split(` `);

    while (array.length > 0) {

        let fullCommand = array.shift();
        let arrayCommand = fullCommand.split(` `)//цялата команда разделена в масив
        let command = arrayCommand.shift(); // само текстовата команда,


        switch (command) {
            case `Buy`:
                buy(startingInventory, arrayCommand[0])
                break;
            case `Trash`:
                trash(startingInventory, arrayCommand[0])
                break;
            case `Repair`:
                repair(startingInventory, arrayCommand[0])
                break;
            case `Upgrade`:
                upgrade(startingInventory, arrayCommand[0])
                break;
        }
    }


    function buy(arr, item) {
        let check = arr.includes(item);
        if (!check) {
            return arr.push(item);
        }
        return;
    }

    function trash(arr, item) {
        let check = arr.indexOf(item)
        if (check >= 0) {
            return arr.splice(check, 1)
        }
        return;
    }

    function repair(arr, item) {
        let check = arr.indexOf(item);
        if (check >= 0) {
            arr.splice(check, 1);
            arr.push(item);
        }
        return arr;
    }

    function upgrade(arr, item) {
        let itemSplit = item.split(`-`);
        let check = arr.indexOf(itemSplit[0]);
        if (check >= 0) {
            arr.splice(check + 1, 0, item.replace(`-`, `:`))
        }
        return arr;
    }
    console.log(startingInventory.join(` `));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

)