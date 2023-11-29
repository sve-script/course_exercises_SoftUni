function censuredWords(text, censured) {

    let starts = `*`.repeat(censured.length)

    console.log(text.split(censured).join(starts));

}
censuredWords('A asd sentence with some words', 'asd')