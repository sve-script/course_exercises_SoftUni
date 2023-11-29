function plantDiscovery(input) {

    let lines = Number(input.shift());

    let plants = {};

    for (let i = 0; i < lines; i++) {

        let [flower, rare] = input.shift().split(`<->`);

        plants[flower] = { "rarity": Number(rare) };
        plants[flower].rating = [0];

    }

    let command = input.shift();

    while (command !== "Exhibition") {

        let splitCommand = command.split(/[:-] /g);

        if (plants.hasOwnProperty(splitCommand[1].replace(" ", ""))) {

            switch (splitCommand[0]) {

                case "Rate":
                    rate(splitCommand[1].replace(" ", ""), Number(splitCommand[2]))
                    break;
                case "Update": update(splitCommand[1].replace(" ", ""), Number(splitCommand[2]))
                    break;
                case "Reset": reset(splitCommand[1])
                    break;
            }
            //console.log(plants);
        } else {
            console.log(`error`);
        }

        command = input.shift();
    }


    console.log(`Plants for the exhibition:`);

    for (let flowers in plants) {

        let avg = plants[flowers].rating.reduce((acc, value) => acc + value)

        if (plants[flowers].rating.length == 1) {
            console.log(`- ${flowers}; Rarity: ${plants[flowers].rarity}; Rating: 0.00`);
        } else {
            console.log(`- ${flowers}; Rarity: ${plants[flowers].rarity}; Rating: ${(avg / (plants[flowers].rating.length - 1)).toFixed(2)}`);
        }

    }


    function rate(flower, rating) {

        plants[flower].rating.push(rating)


    }

    function update(flower, rare) {

        plants[flower].rarity = rare;

    }

    function reset(flower) {
        plants[flower].rating = [0];

    }

}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

