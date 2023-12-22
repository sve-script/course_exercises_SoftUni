function cookingByNumbers(start, command1, command2, command3, command4, command5) {

    const arrOfCommands = [];
    arrOfCommands.push(command1, command2, command3, command4, command5);
    let starting = Number(start);

    for (let el of arrOfCommands) {

        switch (el) {
            case "chop": starting /= 2;
                break;
            case "dice": starting = Math.sqrt(starting)
                break;
            case "spice": starting++
                break;
            case "bake": starting *= 3;
                break;
            case "fillet": starting *= 0.80;
                break;

        }

        console.log(starting);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')