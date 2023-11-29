function employees(array) {

    for (let name of array) {
        let employeesData = {
            employeeName: name,
            personalNum: name.length,
        }

        console.log(`Name: ${employeesData.employeeName} -- Personal Number: ${employeesData.personalNum}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)
