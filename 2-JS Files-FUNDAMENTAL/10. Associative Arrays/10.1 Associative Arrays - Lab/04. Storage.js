function storage(array) {

    let storage = new Map();

    for (let i = 0; i < array.length; i++) {

        let [name, quantity] = array[i].split(` `);

        if (storage.has(name)) {
            let currentQuantity = storage.get(name)
            let newQuantity = Number(quantity);
            currentQuantity += newQuantity;
            storage.set(name, currentQuantity);
            continue;

        }

        storage.set(name, Number(quantity))

    }

    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }

}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']

)