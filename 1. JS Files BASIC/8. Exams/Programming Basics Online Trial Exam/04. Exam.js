function exam(input) {
    let index = 0;
    let studentsNumber = input[index];
    index++

    let grade = 0;
    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0;
    let total = 0;

    for (let i = 1; i < input.length; i++) {
        grade = Number(input[i]);
        total += grade
        if (grade >= 5) {
            topStudents++
        } else if (grade >= 4 && grade <= 4.99) {
            between4and5++
        } else if (grade >= 3 && grade <= 3.99) {
            between3and4++
        } else {
            fail++
        }
    }

    console.log(`Top students: ${(topStudents / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between4and5 / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3and4 / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Average: ${(total / studentsNumber).toFixed(2)}`);
}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

