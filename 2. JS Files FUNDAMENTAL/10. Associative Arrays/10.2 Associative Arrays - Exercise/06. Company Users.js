function companyUsers(array) {


    let companyEmployee = {};

    for (let el of array) {
        let [companyName, employeeID] = el.split(` -> `);

        if (companyEmployee.hasOwnProperty(companyName)) {
            if (companyEmployee[companyName].includes(employeeID)) {
                continue;
            }
            companyEmployee[companyName].push(employeeID);
        } else {
            companyEmployee[companyName] = [employeeID];
        }

    }

    let sortedCompany = Object.entries(companyEmployee).sort((a, b) => a[0].localeCompare(b[0]));


    for (let [compName, employeeIDs] of sortedCompany) {
        console.log(compName);
        employeeIDs.map((el) => console.log(`-- ${el}`))
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)