function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    let tabs = ""; // проверявам го като String, а не като Number (тоест ще търся String-ови стойности)

    for (let index = 2; index <= input.length; index++) {
        tabs = input[index]
        switch (tabs) {
            case `Facebook`: salary -= 150;
                break;
            case `Instagram`: salary -= 100;
                break;
            case `Reddit`: salary -= 50;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }
    if (salary > 0){
        console.log(salary)
    }
}

salary(["5",
"500",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook",
"Reddit"])





