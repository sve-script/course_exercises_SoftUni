function travelTime(input) {

    let destination = {};

    for (let command of input) {
        let [country, town, priceStr] = command.split(` > `);
        let price = Number(priceStr);

        if (!destination.hasOwnProperty(country)) {
            destination[country] = { [town]: price };
        } else {
            if (!destination[country].hasOwnProperty(town)) {
                destination[country][town] = price;
            } else {
                if (price < destination[country][town]) {
                    destination[country][town] = price;
                }
            }
        }
    }

    let entries = Object.entries(destination).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, objTown] of entries) {
        let sortTown = Object.entries(objTown).sort((a, b) => a[1] - b[1]);

        let printValue = `${country} -> `

        for (let [town, price] of sortTown) {
            printValue += `${town} -> ${price} `
        }

        console.log(printValue);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)