// first Variation
function personInfo(firstName, lastName, age) {

    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}
personInfo("Peter", "Pan", "20")

// second variation
function personInfoTwo(firstName, lastName, age) {

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    return person

}
personInfoTwo("Peter", "Pan", "20")

//third variation
function personalInfoThree(firstName, lastName, age) {

    let person = {
        firstName, // бърз сининтаксис за писане на обект, когато променливата приема същото име,
        lastName,
        age
    }

    return person;
}

personalInfoThree("Peter", "Pan", "20")