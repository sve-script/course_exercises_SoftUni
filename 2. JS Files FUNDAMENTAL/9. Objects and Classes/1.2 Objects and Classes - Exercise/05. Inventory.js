function inventory(array) {

    let storeObj = [];

    for (let heroData of array) {
        let [name, level, items] = heroData.split(" / ")
        storeObj.push({ "name": name, "level": Number(level), "items": items });
    }

    let sortedHeroObj = storeObj.sort((a, b) => a.level - b.level);

    for (let heroArmory of sortedHeroObj) {
        console.log(`Hero: ${heroArmory.name}`);
        console.log(`level => ${heroArmory.level}`);
        console.log(`items => ${heroArmory.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)