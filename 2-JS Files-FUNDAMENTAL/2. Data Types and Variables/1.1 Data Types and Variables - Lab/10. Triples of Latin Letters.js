function triplesOfLatinLetters(numbAsString) {

    let ascii = 97;

    for (let i = 0; i < Number(numbAsString); i++){
        
        for (let j = 0; j < Number(numbAsString); j++){

            for (let k = 0; k < Number(numbAsString); k++){

                console.log(String.fromCharCode(ascii+i)+String.fromCharCode(ascii+j)+String.fromCharCode(ascii+k));
            }
        }
    }
}
triplesOfLatinLetters('2')