function walking(input) {
    let goal = 10000;

    let array = input.length
    let index = 0;
    let command = input[index];
    index++

    let sumSteps = 0;

    while (index <= array) {
        if (command === "Going home") {
            sumSteps += Number(input[index])
            break;
        }

        let steps = Number(command);
        sumSteps += steps;

        command = input[index];
        index++
    }

    if (goal > sumSteps) {
        console.log(`${goal - sumSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - goal} steps over the goal!`);
    }



}

walking(["1500",
    "3000",
    "250",
    "1548",
    "1548",
    "1548",
    "1548",
    "1548",
    "2000",
    "Going home",
    "2000"])








