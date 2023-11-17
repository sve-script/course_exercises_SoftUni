function schoolRegister(array) {

    let students = {};

    for (let el of array) {
        let student = el.split(`: `);
        let name = student[1].split(`, `).shift();
        let grade = student[2].split(`, `).shift();;
        let avgGrade = Number(student[3].split(`, `).shift());
        if (avgGrade >= 3) {
            if (!students.hasOwnProperty(grade)) {
                students[grade] = { [name]: avgGrade };
            } else {
                students[grade][name] = avgGrade
            }
        }
    }


    let entries = Object.entries(students).sort((a, b) => Number(a[0]) - Number(b[0]));


    console.log(entries);

    for (let el of entries) {
        let currentGrade = Number(el[0]);
        let currentStudents = Object.entries(el)



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