function stringSubstring(word, msg) {

    let text = msg.toLowerCase().split(` `);
    let foundWord = false;

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('asd',
    'JavaScript is the best programming language'
)