function hashTag(text) {

    let array = text.split(` `);


    let filtered = array.filter((word) => word.startsWith(`#`) && word.length > 1);


    for (let word of filtered) {

        let specialLather = word.slice(1);

        let flag = true;

        for (let symbol of specialLather) {
            if (symbol.charCodeAt() < 65 || symbol.charCodeAt() > 90 && symbol.charCodeAt() < 97 || symbol.charCodeAt() > 122) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(specialLather);

        }
    }
}

hashTag('The symbol # is known #variously in English-speaking #regions as the #number1 sign')