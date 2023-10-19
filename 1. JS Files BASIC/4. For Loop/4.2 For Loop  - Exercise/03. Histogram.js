function histogram(input) {

    let numbTotal = Number(input[0]);
    let numb = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= numbTotal; index++) {

        numb = input[index];

        if (numb < 200) {
            p1++
        } else if (numb <= 399) {
            p2++
        } else if (numb <= 599) {
            p3++
        } else if (numb <= 799) {
            p4++
        } else {
            p5++
        }
    }
    console.log(`${(p1 / numbTotal * 100).toFixed(2)}%`); 
    console.log(`${(p2 / numbTotal * 100).toFixed(2)}%`); 
    console.log(`${(p3 / numbTotal * 100).toFixed(2)}%`); 
    console.log(`${(p4 / numbTotal * 100).toFixed(2)}%`); 
    console.log(`${(p5 / numbTotal * 100).toFixed(2)}%`); 
}

histogram(["14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"])




/*Дадени са n цели числа в интервала [1…1000]. От тях някакъв процент p1 са под 200, друг процент 
p2 са от 200 до 399, друг процент p3 са от 400 до 599, друг процент p4 са от 600 до 799 и останалите p5 процента са от 800 нагоре.
 Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5. 
 
 Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. 
 Получаваме следното разпределение и визуализация:




 */