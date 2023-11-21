// КОД С EXEC - КОЛКО ВЕРЕН НЕ ЗНАМ, НО РАБОТЕЩ 

function furniture(arr) {

    let command = arr.shift();

    let furnitures = [];
    let price = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<pricePerItem>\d+\.?\d+)!(?<quantity>\d+)/g;

    while (command !== `Purchase`) {

        let match = pattern.exec(command)

        while (match !== null) {
            let { name, pricePerItem, quantity } = match.groups;
            furnitures.push(name);
            pricePerItem = Number.parseFloat(pricePerItem);
            quantity = Number(quantity);

            let totalPrice = pricePerItem * quantity;

            price += totalPrice;

            match = pattern.exec(command)
        }

        command = arr.shift()
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

// Код с match
function items(arr) {

    let furniture = [];
    let price = 0;

    let command = arr.shift();

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<pricePerItem>\d+\.?\d+)!(?<quantity>\d+)/; // има ли g накрая кода гърми ??

    while (command !== `Purchase`) {

        let match = command.match(pattern);

        if (match) {
            let { name, pricePerItem, quantity } = match.groups;
            furniture.push(name);

            let totalPrice = Number(pricePerItem) * Number(quantity);
            price += totalPrice
        }

        command = arr.shift()
    }

    console.log(`Bought furniture:`);
    furniture.forEach(x => console.log(x));
    console.log(`Total money spend: ${price.toFixed(2)}`);

}
items(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']

)