function oldBooks(input) {
    let index = 0;
    let Book = input[index];
    index++;

    let searchingBook = input[index];
    index++;
    let checkingBooks = 0;

    while (searchingBook !== Book) {
        if (searchingBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${checkingBooks} books.`);
            break;
        }
        checkingBooks += 1;
        searchingBook = input[index];
        index++
    }

    if (searchingBook === Book) {
        console.log(`You checked ${checkingBooks} books and found it.`);
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


