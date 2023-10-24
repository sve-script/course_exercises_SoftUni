function convertToObject(json) {

    let object = {

        name: `Sveotlsav`,
        age: 32,
        eyeColor: `brown`
    }

    let objectArr = Object.values(object);

    console.log(objectArr);


}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')