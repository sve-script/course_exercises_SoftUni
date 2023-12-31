function schoolRegister(array) {

    let students = {};

    for (let el of array) {
        let student = el.split(`: `);

        let studentName = student[1].split(`, `).shift();
        let studentGrade = student[2].split(`, `).shift();;
        let studentAvgGrade = Number(student[3].split(`, `).shift());

        if (studentAvgGrade >= 3) {
            if (!students.hasOwnProperty(studentGrade)) {
                students[studentGrade] = [studentName, studentAvgGrade];
            } else {
                students[studentGrade].push(studentName, studentAvgGrade)
            }
        }
    }

    for (let key in students) {

        let names = students[key].filter((x) => typeof x == `string`)
        let grades = students[key].filter((x) => typeof x == `number`).reduce((accumulator, value) => accumulator + value);

        console.log(`${Number(key) + 1} Grade`);
        console.log(`List of students: ${names.join(`, `)}`);
        console.log(`Average annual score from last year: ${(grades / (students[key].length / 2)).toFixed(2)}`);
        console.log(``);
    }

}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)