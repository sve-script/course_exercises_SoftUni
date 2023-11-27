function shoppingList(array) {

    let startingList = array.shift().split("!");

    while (array.length > 0) {

        let fullCommand = array.shift().split(" ");
        let command = fullCommand[0];

        switch (command) {
            case "Urgent":
                urgent(startingList, fullCommand[1])
                break;
            case "Unnecessary":
                unnecessary(startingList, fullCommand[1])
                break;
            case "Correct":
                correct(startingList, fullCommand[1], fullCommand[2])
                break;
            case "Rearrange":
                rearrange(startingList, fullCommand[1])
                break;

        }
    }


    function urgent(arr, item) {
        let check = arr.includes(item);
        if (!check) {
            return arr.unshift(item);
        }
        return;
    }

    function unnecessary(arr, item) {
        let check = arr.indexOf(item);
        if (check >= 0) {
            return arr.splice(check, 1);
        }
        return;
    }

    function correct(arr, itemRemove, itemAdd) {
        let check = arr.indexOf(itemRemove);
        if (check >= 0) {
            return arr.splice(check, 1, itemAdd)
        }
        return;
    }

    function rearrange(arr, item) {
        let check = arr.indexOf(item);
        if (check >= 0) {
            let movedItem = arr.splice(check, 1);
            arr.push(movedItem)
        }

    }


    console.log(startingList.join(`, `));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])



// It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list.
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"
// Examples
// Input	Output
// Tomatoes!Potatoes!Bread
// Unnecessary Milk
// Urgent Tomatoes
// Go Shopping!	Tomatoes, Potatoes, Bread
// Milk!Pepper!Salt!Water!Banana
// Urgent Salt
// Unnecessary Grapes
// Correct Pepper Onion
// Rearrange Grapes
// Correct Tomatoes Potatoes
// Go Shopping!	Milk, Onion, Salt, Water, Banana
