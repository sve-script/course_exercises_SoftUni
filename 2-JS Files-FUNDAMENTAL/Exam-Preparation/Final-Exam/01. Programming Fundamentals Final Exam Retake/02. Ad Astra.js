function adAstra([input]) {

    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let match = pattern.exec(input);

    let products = [];

    let totalCalories = 0;

    while (match !== null) {

        let { name, date, calories } = match.groups;
        products.push({ name, "Expired": date, "Nutrition": Number(calories) });

        totalCalories += Number(calories);

        match = pattern.exec(input);
    }


    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    products.forEach(x => console.log(`Item: ${x.name}, Best before: ${x.Expired}, Nutrition: ${x.Nutrition}`))

}
adAstra(["#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"]
)


