function furniture(arr) {

    let indx = 0;

    let el = arr[indx];

    let furnitures = [];
    let price = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<pricePerItem>\d+.+)!(?<quantity>\d+)/g;

    while (el !== `Purchase`) {
        indx++

        let match = pattern.exec(el)

        while (match !== null) {
            let { name, pricePerItem, quantity } = match.groups;
            furnitures.push(name);
            pricePerItem = Number.parseFloat(pricePerItem);
            quantity = Number(quantity);

            let totalPrice = pricePerItem * quantity;

            price += totalPrice;

            match = pattern.exec(el)
        }

        el = arr[indx]
    }

    console.log(`Bought furniture:`);
    furnitures.forEach(x => console.log(x));
    console.log(`Total money spend: ${price.toFixed(2)}`);

}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)