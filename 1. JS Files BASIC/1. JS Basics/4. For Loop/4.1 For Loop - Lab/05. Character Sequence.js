function characterSequence(input) {
    let text = input[0];

    for (let i = 0; i < text.length; i++) {
        let symbol = text.charAt(i)
        console.log(symbol);
    }


}

characterSequence(["softuni"])








/*Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред. */