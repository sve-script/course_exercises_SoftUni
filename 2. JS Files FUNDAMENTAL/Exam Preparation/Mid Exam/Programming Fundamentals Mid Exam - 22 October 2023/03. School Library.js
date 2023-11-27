function schoolLibrary(array) {

    let shelfWithBooks = array.shift().split(`&`);

    while (array.length > 0) {

        let fullCommand = array.shift().split(` | `)
        let command = fullCommand.shift();

        if (command == `Done`) {
            break;
        }

        switch (command) {
            case "Add Book":
                addBook(shelfWithBooks, fullCommand[0])
                break;
            case "Take Book":
                takeBook(shelfWithBooks, fullCommand[0])
                break;
            case "Swap Books":
                swapBooks(shelfWithBooks, fullCommand[0], fullCommand[1])
                break;
            case "Insert Book":
                insertBook(shelfWithBooks, fullCommand[0])
                break;
            case "Check Book":
                checkBook(shelfWithBooks, fullCommand[0])
                break;
        }
    }

    function addBook(arr, book) {
        let check = arr.includes(book)

        if (!check) {
            return arr.unshift(book)
        }
        return;
    }

    function takeBook(arr, book) {
        let check = arr.indexOf(book)

        if (check >= 0) {
            return arr.splice(check, 1);
        }
        return;
    }

    function swapBooks(arr, book1, book2) {
        let checkFirstBookIndx = arr.indexOf(book1);
        let checkSecondBookIndx = arr.indexOf(book2);

        if (checkFirstBookIndx < 0 || checkFirstBookIndx >= arr.length) {
            return;
        }
        if (checkSecondBookIndx < 0 || checkSecondBookIndx >= arr.length) {
            return;
        }

        [arr[checkFirstBookIndx], arr[checkSecondBookIndx]] = [arr[checkSecondBookIndx], arr[checkFirstBookIndx]];
        return arr;

    }

    function insertBook(arr, book) {
        let check = arr.includes(book)

        if (!check) {
            return arr.push(book)
        }
        return;
    }


    function checkBook(arr, indx) {
        let numbIndx = Number(indx);
        if (numbIndx < 0 || numbIndx >= arr.length) {
            return;
        }
        return console.log(arr[numbIndx]);
    }


    console.log(shelfWithBooks.join(`, `));
}
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary", "Check Book | 2", "Swap Books | Don Quixote | Ulysses", "Done"])