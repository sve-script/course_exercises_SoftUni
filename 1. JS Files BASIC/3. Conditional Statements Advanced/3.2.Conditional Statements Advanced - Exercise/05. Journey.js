function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0.0;
    let destination = ``
    let place = ``

    if (budget<= 100){
        destination = `Bulgaria`
        switch (season){
            case `summer` :
                price = budget * 0.30;
                place = `Camp`;
            break;
            case `winter` :
                price = budget * 0.70;
                place = `Hotel`;
            break;
        } 
    } else if (budget <= 1000){
        destination = `Balkans`;
        switch (season){
            case `summer` :
                price = budget * 0.40;
                place = `Camp`;
            break;
            case `winter` :
                price = budget * 0.80;
                place = `Hotel`;
            break;
        }
    } else {
        destination = `Europe`
        place = `Hotel`;
        price = budget * 0.90;
        }
            
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"])

/*Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. 
Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. 
Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: 
•	При 100лв. или по-малко – някъде в България
o	Лято – 30% от бюджета
o	Зима – 70% от бюджета
•	При 1000лв. или по малко – някъде на Балканите
o	Лято – 40% от бюджета
o	Зима – 80% от бюджета
•	При повече от 1000лв. – някъде из Европа
o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
 
На конзолата трябва да се отпечатат два реда.
•	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
•	Втори ред – "{Вид почивка} – {Похарчена сума}"
o	Почивката може да е между "Camp" и "Hotel"
o	Сумата трябва да е закръглена с точност до вторият знак след запетаята.



*/