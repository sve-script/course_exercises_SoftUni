function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;
    let graduation = Number(input[index]);
    index++

    let avgGraduation = 0;
    let repeatingAGrade = 0;
    while (grade <= 12) {
        if (graduation >= 4.00) {
            grade += 1;
            avgGraduation += graduation;
            repeatingAGrade = 0;
        } else {
            repeatingAGrade += 1
        }
        if (repeatingAGrade === 2) {
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }
        graduation = Number(input[index]);
        index++
    }

    if (grade == 13) {
        console.log(`${name} graduated. Average grade: ${(avgGraduation / 12).toFixed(2)}`);
    }

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


