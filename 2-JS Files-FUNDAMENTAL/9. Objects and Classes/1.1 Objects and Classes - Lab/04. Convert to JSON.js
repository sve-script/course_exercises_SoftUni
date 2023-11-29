function convertToJSON(name, lastName, hairColor) {

    let object = {
        name,
        lastName,
        hairColor
    }

    let text = JSON.stringify(object);
    return text
}
convertToJSON('George', 'Jones', 'Brown')
