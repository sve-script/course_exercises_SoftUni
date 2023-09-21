function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    if (town === `Sofia`) {
        if (product === `coffee`) {
            console.log(quantity * 0.50);
        } else if (product === `water`) {
            console.log(quantity * 0.80);
        } else if (product === `beer`) {
            console.log(quantity * 1.20);
        } else if (product === `sweets`) {
            console.log(quantity * 1.45);
        } else
            console.log(quantity * 1.60);
    } else if (town === `Plovdiv`) {
        if (product === `coffee`) {
            console.log(quantity * 0.40);
        } else if (product === `water`) {
            console.log(quantity * 0.70);
        } else if (product === `beer`) {
            console.log(quantity * 1.15);
        } else if (product === `sweets`) {
            console.log(quantity * 1.30);
        } else
            console.log(quantity * 1.50);
    } else {
        if (product === `coffee`) {
            console.log(quantity * 0.45);
        } else if (product === `water`) {
            console.log(quantity * 0.70);
        } else if (product === `beer`) {
            console.log(quantity * 1.10);
        } else if (product === `sweets`) {
            console.log(quantity * 1.35);
        } else
            console.log(quantity * 1.55);
    }

}
smallShop([`coffee`, `Varna`, `2`])

/**Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
град / продукт	coffee	water	beer	sweets	peanuts
Sofia	        0.50	0.80	1.20	1.45	1.60
Plovdiv	        0.40	0.70	1.15	1.30	1.50
Varna	        0.45	0.70	1.10	1.35	1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
 */