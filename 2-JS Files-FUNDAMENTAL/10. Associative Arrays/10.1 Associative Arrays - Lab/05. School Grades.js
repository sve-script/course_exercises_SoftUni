function schoolGrades(array) {

    let studentsArr = [];


    for (let student of array) {

        let students = {};
        let split = student.split(` `);

        let studentsName = split.shift();
        let studentsGrades = split.map((grade) => Number(grade))

        for (let currentGrade of studentsGrades) {
            if (students.hasOwnProperty(studentsName)) {
                students[studentsName] += currentGrade;
                students[`numbersTry`] += 1
            } else {
                students[studentsName] = currentGrade;
                students[`numbersTry`] = 1
            }

        }
        let flag = false;

        for (let el of studentsArr) {
            if (el.hasOwnProperty(studentsName)) {
                flag = true;
                let [name, trying] = Object.entries(students);
                let studdyName = name[0];
                let currentTotalGrade = Number(name[1]);
                let try1 = trying[0];
                let tryNumb = Number(trying[1])

                el[studdyName] += currentTotalGrade;
                el[try1] += tryNumb

            }
        }

        if (!flag) {

            studentsArr.push(students)
        }
    }

    let finalObj = {};

    for (let obj of studentsArr) {

        let [name, trying] = Object.entries(obj);
        finalObj[name[0]] = (name[1] / trying[1]).toFixed(2)

    }


    let objArray = Object.entries(finalObj).sort((a, b) => a[0].localeCompare(b[0]));

    let finalFinalObjGODDAMN = Object.fromEntries(objArray);

    for (let key in finalFinalObjGODDAMN) {
        console.log(`${key}: ${finalFinalObjGODDAMN[key]}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']

)