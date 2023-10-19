function backToThePast(input) {
    let ivan = 18;
    let index = 0;
    let moneyHave = Number(input[index]);
    index++
    let yearsToLive = Number(input[index]);

    let spendMoneyPerYear = 0;
    let moneyLeft = 0;

    for (let i = 1800; i <= yearsToLive; i++) {
        if (i % 2 === 0){
            spendMoneyPerYear+=12000
            if(ivan !== 18)
            ivan++
        } else {
            ivan++
            spendMoneyPerYear+=12000 + 50 * ivan
        }

    }

    if (moneyHave >= spendMoneyPerYear){
        console.log(`Yes! He will live a carefree life and will have ${(moneyHave-spendMoneyPerYear).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(spendMoneyPerYear - moneyHave).toFixed(2)} dollars to survive.`);
    }


}
backToThePast([100000.15, 1808])

/*Иванчо е на 18 и се връща през 1800 г.
до 1801 ще изхарчи 12500 лв т.к е четна година.
през 1801 ще изхарчи 12500 + 50 * 19 (т.к вече е на 19 г)
през 1802 ще изхарчи още 12500 т.к е четна и т.н -- трябва да сметнем дали парите ще му стигнат.

какво ни трябва :

!начална година : имаме я от условието
!крайна година: имаме я от входните данни
колко ще харчи през дадената година:
колко пари има :
дали годината е четна или нечетна
на колко години е през дадената година;


*/