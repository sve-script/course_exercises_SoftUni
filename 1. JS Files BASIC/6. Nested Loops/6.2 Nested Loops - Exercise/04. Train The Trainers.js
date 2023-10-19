function trainThTrainers(input) {
    index = 0;
    let judges = Number(input[index]); // 0;
    index++;

    let command = input[index]; // 1;
    index++

    let totalGrade = 0;
    let totalPresentation = 0;

    while (command !== "Finish") {
        let presentation = command;
        let sumGrade = 0;

        for (let i = 0; i < judges; i++) {
            let grade = Number(input[index]);

            index++
            sumGrade += grade

        }

        let tempGrade = sumGrade / judges
        totalGrade += tempGrade

        command = input[index];
        index++

        totalPresentation++


        console.log(`${presentation} - ${tempGrade.toFixed(2)}.`);
    }

    if (command == "Finish") {
        console.log(`Student's final assessment is ${(totalGrade / totalPresentation).toFixed(2)}.`);
    }


}

trainThTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

