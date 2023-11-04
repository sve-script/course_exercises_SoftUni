function phoneBook(array) {

    let phonebook = {}

    for (let el of array) {
        let splitEl = el.split(` `);
        let [name, phonenumber] = splitEl;

        phonebook[name] = phonenumber;
    }

    for (let keys in phonebook) {
        console.log(`${keys} -> ${phonebook[keys]}`);
    }

}
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']

)