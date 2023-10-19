function examPreparation(input) {
    let index = 0;
    let poorGrade = Number(input[index]);
    index++

    let grade = input[index];
    index++

    let totalGrades = 0;
    let avgScore = 0;
    let badScore = 0;
    let lastGrade = ""

    while (grade !== "Enough") {
        let score = Number(input[index]);
        index++
        if (score <= 4) {
            badScore += 1
        }
        if (badScore == poorGrade) {
            console.log(`You need a break, ${badScore} poor grades.`);
            break;
        }

        totalGrades += 1
        avgScore += score
        lastGrade = grade
        grade = input[index];
        index++

    }

    if (grade == "Enough") {
        console.log(`Average score: ${(avgScore / totalGrades).toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastGrade}`);
    }

}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

