function toyShop(input) {

    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let puffBear = Number(input[3]);
    let minions = Number(input[4]);
    let toyTruck = Number(input[5]);

    let toysPeaces = puzzle + talkingDolls + puffBear + minions + toyTruck
    let toysPrice = puzzle * 2.6 + talkingDolls * 3 + puffBear * 4.1 + minions * 8.2 + toyTruck * 2;

    if (toysPeaces >= 50) {
        toysPrice = toysPrice - (toysPrice * 0.25)
    }

    toysPrice = toysPrice - (toysPrice * 0.1)

    if (toysPrice >= trip) {
        console.log(`Yes! ${(toysPrice - trip).toFixed(2)} lv left.`)
    } else
        console.log(`Not enough money! ${(trip - toysPrice).toFixed(2)} lv needed.`)


}

toyShop(["40.8", "20", "25", "30", "50", "10"])

/*Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
Цени на играчките:
•	Пъзел - 2.60 лв.
•	Говореща кукла - 3 лв.
•	Плюшено мече - 4.10 лв.
•	Миньон - 8.20 лв.
•	Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина.
 Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход
От конзолата се четат 6 реда:
1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2.	Брой пъзели - цяло число в интервала [0… 1000]
3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
5.	Брой миньони - цяло число в интервала [0 … 1000]
6.	Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
•	Ако парите са достатъчни се отпечатва:
o	"Yes! {оставащите пари} lv left."
•	Ако парите НЕ са достатъчни се отпечатва:
o	"Not enough money! {недостигащите пари} lv needed."

Резултатът трябва да се форматира до втория знак след десетичната запетая.
*/