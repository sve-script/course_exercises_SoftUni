function gladiatorExpenses(lostCount, helmedPrice, swordPrice, shieldPrice, armorPrice) {

    let count = 0;
    let totalBrokeShield = 0;

    let totalHelmedPrice = 0;
    let totalSwordPrice = 0;
    let totalShieldPrice = 0;
    let totalArmorPrice = 0;


    for (let i = 0; i < lostCount; i++) {
        count++

        if (count % 2 == 0) {
            totalHelmedPrice += helmedPrice;
        }
        if (count % 3 == 0) {
            totalSwordPrice += swordPrice;
        }

        if (count % 2 == 0 && count % 3 == 0) {
            totalShieldPrice += shieldPrice;
            totalBrokeShield++;
            if (totalBrokeShield % 2 == 0) {
                totalArmorPrice += armorPrice;
            }
        }
    }
    let totalSum = totalHelmedPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
12.50,
21.50,
40,
200
)