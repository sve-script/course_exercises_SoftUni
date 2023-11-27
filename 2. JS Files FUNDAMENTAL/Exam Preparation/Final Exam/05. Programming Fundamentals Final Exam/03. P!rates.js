function pirates(input) {

    let command = input.shift();

    let cities = {};

    while (command !== `Sail`) {
        let [name, population, gold] = command.split(`||`);

        if (!cities.hasOwnProperty(name)) {
            cities[name] = { "population": Number(population), "gold": Number(gold) };
        } else {
            cities[name]["population"] += Number(population)
            cities[name]["gold"] += Number(gold)
        }
        command = input.shift();
    }

    command = input.shift();

    while (command !== `End`) {

        let splitCommand = command.split(`=>`);

        if (splitCommand.length == 4) {

            let [_, city, people, gold] = splitCommand;

            cities[city]["population"] -= Number(people);
            cities[city]["gold"] -= Number(gold);

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[city]["population"] <= 0 || cities[city]["gold"] <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }
        } else {

            let [_, city, gold] = splitCommand;

            if (Number(gold) < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[city]["gold"] += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city]["gold"]} gold.`);
            }

        }

        command = input.shift();
    }


    let entries = Object.entries(cities);

    if (entries.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

        for (let key in cities) {
            console.log(`${key} -> Population: ${cities[key]["population"]} citizens, Gold: ${cities[key]["gold"]} kg`);
        }
    }



}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])