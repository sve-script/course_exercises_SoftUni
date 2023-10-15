function arrayManipulator(array, commands) {

    let i = 0;

    while (commands[i] !== `print`) {

        let fullCommand = commands[i]
        let arrayCommand = fullCommand.split(` `)//цялата команда разделена в масив
        let command = arrayCommand.shift(); // само текстовата команда,

        switch (command) {
            case `add`:
                add(array, arrayCommand[0], arrayCommand[1]);
                break;

            case `addMany`:
                let indx = arrayCommand.shift();
                addMany(array, Number(indx), arrayCommand)
                break;

            case `contains`:
                console.log(contains(array, arrayCommand[0]));
                break;

            case `remove`:
                remove(array, arrayCommand[0]);
                break;

            case `shift`:
                shift(array, arrayCommand[0]);
                break;

            case `sumPairs`:
                array = sumPair(array);
                break;
        }

        i++;
    }

    console.log(`[ ${array.map(Number).join(`, `)} ]`);

    function add(arr, index, element) {
        return arr.splice(index, 0, element)
    }
    function addMany(arr, index, element) {
        for (let elToAdd of element) {
            arr.splice(index, 0, elToAdd)
            index++
        };

        return arr;
    }

    function contains(arr, element) {
        let result = arr.indexOf(Number(element));
        return result;
    }

    function remove(arr, index) {
        let result = arr.splice(index, 1);

        return result;
    }

    function shift(arr, position) {
        for (let i = 0; i < Number(position); i++) {
            arr.push(arr.shift())
        }

        return arr
    }

    function sumPair(arr) {

        let numbArr = arr.map(Number)
        let sum = [];

        while (numbArr.length > 0) {

            let firstElement = numbArr.shift();
            if (numbArr.length == 0) {
                sum.push(firstElement);
                break;
            }
            let secondElement = numbArr.shift();
            sum.push(firstElement + secondElement)
        }

        return sum;
    }
}

function arrManipulator(nums, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(" ");
        let currentCommand = currentValues.shift();
        let sumPairs = 0;
        let pairsOfSumNums = [];

        switch (currentCommand) {
            case "add":
                let indexToAdd = Number(currentValues[0]);
                let elementToAdd = Number(currentValues[1]);
                nums.splice(indexToAdd, 0, elementToAdd);
                break;
            case "addMany":
                let indexToAddMany = Number(currentValues.shift());
                let elementToAddMany = currentValues;
                let currentElementToAddMany = 0;
                for (let i = elementToAddMany.length - 1; i >= 0; i--) {
                    currentElementToAddMany = Number(elementToAddMany[i]);
                    nums.splice(indexToAddMany, 0, currentElementToAddMany);
                }
                break;
            case "contains":
                console.log(nums.indexOf(Number(currentValues[0])));
                break;
            case "remove":
                let indexToRemove = Number(currentValues[0]);
                nums.splice(indexToRemove, 1);
                break;
            case "shift":
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
                break;
            case "sumPairs":
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                for (let i = 0; i < nums.length; i += 2) {
                    sumPairs = nums[i] + nums[i + 1];
                    pairsOfSumNums.push(sumPairs);
                }
                nums = [...pairsOfSumNums];
                break;
            case "print":
                console.log(`[ ${nums.join(", ")} ]`);
                return;
        }
    }
}


arrayManipulator([1, 2, 3, 4, 5],
    [`sumPairs`, 'shift 1', 'remove 0', 'add 10 1', 'addMany 1 5 3 5 4 7 7 7 1 1 2 5 6 1', 'remove 0', 'shift -1', `sumPairs`, 'contains 8', 'contains 5', 'contains 11', 'remove 6', 'addMany 1', 'shift 9', 'add -1 1', `sumPairs`, 'print'])


arrManipulator([1, 2, 3, 4, 5],
    [`sumPairs`, 'shift 1', 'remove 0', 'add 10 1', 'addMany 1 5 3 5 4 7 7 7 1 1 2 5 6 1', 'remove 0', 'shift -1', `sumPairs`, 'contains 8', 'contains 5', 'contains 11', 'remove 6', 'addMany 1', 'shift 9', 'add -1 1', `sumPairs`, 'print'])