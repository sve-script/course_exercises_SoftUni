function softUniBarIncome(array) {

    let totalIncome = 0;

    let command = array.shift();

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.\d]*<(?<product>\w+)>[^|$%.\d]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d*)\$/;


    while (command !== `end of shift`) {

        let match = command.match(pattern);

        if (match) {

            let { name, product, count, price } = match.groups;

            console.log(`${name}: ${product} - ${(Number(count) * Number(price)).toFixed(2)}`);

            totalIncome += Number(count * price)
        }

        command = array.shift();
    }


    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']



)