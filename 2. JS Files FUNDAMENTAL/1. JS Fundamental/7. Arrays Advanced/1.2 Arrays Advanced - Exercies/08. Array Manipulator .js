function arrayManipulator(array, commands) {

    array = array.map(Number);

    let i = 0;

    while (commands[i] !== `print`) {

        let fullCommand = commands[i]
        let arrayCommand = fullCommand.split(` `)//цялата команда разделена в масив
        let command = arrayCommand.shift(); // само текстовата команда,

        switch (command) {
            case `add`:
                add(array, Number(arrayCommand[0]), Number(arrayCommand[1]));
                break;

            case `addMany`:
                let indx = Number(arrayCommand.shift());
                addMany(array, Number(indx), arrayCommand.map(Number))
                break;

            case `contains`:
                console.log(contains(array, Number(arrayCommand[0])));
                break;

            case `remove`:
                remove(array, Number(arrayCommand[0]));
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


arrayManipulator([1, 2, 3, 4, 5],
    [`sumPairs`, 'shift 1', 'remove 0', 'add 10 1', 'addMany 1 5 3 5 4 7 7 7 1 1 2 5 6 1', 'remove 0', 'shift -1', `sumPairs`, 'contains 8', 'contains 5', 'contains 11', 'remove 6', 'addMany 1', 'shift 9', 'add -1 1', `sumPairs`, 'print'])
