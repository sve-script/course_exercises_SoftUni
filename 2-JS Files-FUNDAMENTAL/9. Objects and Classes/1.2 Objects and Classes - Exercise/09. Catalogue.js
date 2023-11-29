function catalogue(input) {

    let storage = {};

    for (let el of input) {
        let [name, price] = el.split(` : `);

        let firstNameLetter = name[0];
        if (!storage.hasOwnProperty(firstNameLetter)) {
            storage[firstNameLetter] = {};
        }
        storage[firstNameLetter][name] = Number(price)
    }

    let entries = Object.entries(storage).sort();

    for (let [symbol, object] of entries) {
        console.log(symbol);
        let objEntries = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));
        for (let [name, price] of objEntries) {
            console.log(`  ${name}: ${price}`);
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)