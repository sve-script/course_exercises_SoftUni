function addressBook(array) {

    let addressArray = array.map((item) => item.split(`:`)).sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];

        if (keyA < keyB) {
            return -1;
        } else if (keyB > keyA) {
            return 1;
        } else {
            return
        }
    });


    let obj = Object.fromEntries(addressArray);


    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']

)